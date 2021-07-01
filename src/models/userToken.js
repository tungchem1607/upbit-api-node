"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const usertoken = sequelize.define('users_token', {
        "user_id": DataTypes.INTEGER,
        "token": DataTypes.STRING,
        "FireBase": DataTypes.STRING,
        "ip": DataTypes.STRING,
        "status": DataTypes.STRING
    },
    {
        timestamps: false,
        freezeTableName: true,
    });

    return usertoken
};
