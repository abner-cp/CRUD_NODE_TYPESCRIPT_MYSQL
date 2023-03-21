import { DataTypes } from 'sequelize';  //igual q moongose
import db from '../db/connection';

const Usuario = db.define('Usuario', { //define modelo
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

});

export default Usuario;