import dotenv from 'dotenv';
import Server from './models/server';

//configurar dotenv
dotenv.config(); //config por defecto(establece variables entorno)

const server = new Server();

server.listen();