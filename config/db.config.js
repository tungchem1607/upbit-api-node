/**
 *
 *
 * @type {{}}
 */

 module.exports = {
  DB_SQL_HOST: process.env.NODE_ENV === "production" ? "localhost" : "localhost",
  DB_SQL_PORT: "3306",
  DB_SQL_USER: process.env.NODE_ENV === "production" ? "root" : "root",
  DB_SQL_PASSWORD: process.env.NODE_ENV === "production" ? "tungnt@123" : "hungna",
  DB_SQL_NAME: process.env.NODE_ENV === "production" ? "appcoin" : "app_coin",

};