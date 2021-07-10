"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const config = sequelize.define('notication', {
        "userId": DataTypes.STRING,
        "title": DataTypes.STRING,
        "content": DataTypes.STRING,
        "data": DataTypes.STRING,
        "created_at": DataTypes.STRING
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
