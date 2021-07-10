"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const notication = sequelize.define('coin_notication', {
        "title": DataTypes.STRING,
        "msg": DataTypes.STRING,
        "data": DataTypes.STRING,
        "userId": DataTypes.STRING,
        "status": DataTypes.STRING,
        "target": DataTypes.STRING,
        "response": DataTypes.STRING,
        "created_at": DataTypes.STRING,
        "updated_at": DataTypes.STRING
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

    return notication
};
