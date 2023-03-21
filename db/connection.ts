import { Sequelize } from 'sequelize'; //orm

const db = new Sequelize('node_curso', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,

});

export default db;
