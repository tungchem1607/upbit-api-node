"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const coinBinance = sequelize.define('coin_binance', {
        "type": DataTypes.STRING,
        "name": DataTypes.STRING,
        "code": DataTypes.STRING,
        "price": DataTypes.STRING
    }, 
    {
        timestamps: true,
        freezeTableName: true,
        createdAt: "create_at",
        updatedAt: "update_at"
    }
    )
    ;

    // Notification.associate = function (models) {
    //     // associations can be defined here
    //     Notification.belongsTo(models.mheath_user, {
    //         "foreignKey": "user_id"
    //     });
    // };

    // mhealthBmi.sync({ force: true });

    return coinBinance
};
