"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        "username": DataTypes.STRING,
        "phone": DataTypes.STRING,
        "email": DataTypes.STRING,
        "fullname": DataTypes.STRING,
        "san1": DataTypes.STRING,
        "san2": DataTypes.STRING,
        "x1": DataTypes.INTEGER,
        "x2": DataTypes.INTEGER,
        "x3": DataTypes.INTEGER,
        "KRW": DataTypes.STRING,
        "USDT": DataTypes.STRING,
    },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
    // User.hasMany(coinfollow, { foreignKey: 'userid' })
    users.associate = function(models) {
        users.hasMany(models.coinfollow, {foreignKey: 'userid'});
        users.hasOne(models.users_token, {foreignKey: 'user_id'});
    }
    return users
};
