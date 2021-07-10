"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const config = sequelize.define('history_binance_upbit', {
        id:  { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        coin: DataTypes.STRING,
        san1: DataTypes.STRING,
        san2: DataTypes.STRING,
        date: DataTypes.STRING,
        created_at: DataTypes.STRING
    },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );

    // Notification.associate = function (models) {
    //     // associations can be defined here
    //     Notification.belongsTo(models.mheath_user, {
    //         "foreignKey": "user_id"
    //     });
    // };

    // mhealthBmi.sync({ force: true });

    return config
};
