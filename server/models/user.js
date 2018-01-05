'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        first_name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        username:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        last_login: DataTypes.DATE,
        status: {
            type: DataTypes.STRING,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return User;
};