"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const config = sequelize.define('config', {
        "key": DataTypes.STRING,
        "value": DataTypes.STRING
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
