const bcrypt = require('bcrypt-nodejs');
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
const JWTParams = {
    secretOrKey: process.env.JWTSECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
};


module.exports = function(passport, user) {
    var LocalStrategy = require('passport-local').Strategy;
    let User = user;
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {
            var generateHash = function(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
            };
            User.findOne({
                where: {
                    email: email
                }
            })
            .then((user) => {
                if(user) {
                    return done(null, false, {
                        message: 'That Email Is Already Registered'
                    });
                } else {
                    var userpassword = generateHash(password);
                    var data = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        username: req.body.username,
                        email: req.body.email,
                        password: userpassword
                    };
                    User.create(data, function(newUser, created){
                        if(!newUser) {
                            return done(null, false)
                        }
                        if(newUser) {
                            return done(null, newUser)
                        }
                    })
                }
            })
        }
    ));

    passport.use('local-login', new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
        function(req, email, password, done) {
            var isValidPassword = function(userpass, password) {
                return bcrypt.compareSync(password, userpass);
            };

            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect Username or password.'
                    });

                }
                let userinfo = user.get();

                return done(null, userinfo);


            }).catch(function(err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });
        }

    ));

    passport.use(new JWTStrategy(JWTParams, function(jwt_payload, done) {
        User.findOne({
                where: {
                    id: jwt_payload.id
                }
            })
            .then((user) => {
                if (!user) {
                    return done("Invalid Token", false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
    }));


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id)
            .then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }

        });

    });
};