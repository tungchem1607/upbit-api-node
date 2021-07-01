"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const coinNotication = sequelize.define('coin_notication', {
        "userId": DataTypes.INTEGER,
        "data": DataTypes.STRING,
        "msg": DataTypes.STRING,
        "target": DataTypes.INTEGER,
        "status": DataTypes.INTEGER,
        "response": DataTypes.STRING
    },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );

    // coinfollow.associate = function (models) {  
    //     // associations can be defined here
    //     coinfollow.belongsTo(models.users, {
    //         foreignKey: "userid",
    //         sourceKey: 'id',
    //     });
    // };

    // mhealthBmi.sync({ force: true });

    return coinNotication
};
