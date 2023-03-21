"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); //orm
const db = new sequelize_1.Sequelize('node_curso', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map