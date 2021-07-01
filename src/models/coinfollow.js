"use strict";
// const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const coinfollow = sequelize.define('coinfollow', {
        "userid": DataTypes.INTEGER,
        "coinCode": DataTypes.STRING
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

    return coinfollow
};
