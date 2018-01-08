'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        last_login: DataTypes.DATE
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Recipient);
        User.hasMany(models.Fire);
    };
    return User;
};