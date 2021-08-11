"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const historyUpbit = sequelize.define('history_upbit', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        "type": DataTypes.STRING,
        "name": DataTypes.STRING,
        "code": DataTypes.STRING,
        "openPrice": DataTypes.STRING,
        "highPrice": DataTypes.STRING,
        "lowPrice": DataTypes.STRING,
        "closePrice": DataTypes.STRING
    },
        {
            timestamps: true,
            freezeTableName: true,
            createdAt: "create_at",
            updatedAt: "update_at"
        }
    );

    // Notification.associate = function (models) {
    //     // associations can be defined here
    //     Notification.belongsTo(models.mheath_user, {
    //         "foreignKey": "user_id"
    //     });
    // };

    // mhealthBmi.sync({ force: true });

    return historyUpbit
};