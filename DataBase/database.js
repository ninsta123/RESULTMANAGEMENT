

const Sequelize = require('sequelize');

const sequelize = new Sequelize('studentmarksheetmanagementdb','heramb','Abcd@1234#',{
    host:"studentmanagementserver.mysql.database.azure.com",
    dialect:"mysql"
});

module.exports = sequelize;
