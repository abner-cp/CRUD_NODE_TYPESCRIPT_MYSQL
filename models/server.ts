import express, {Application} from 'express';
import userRoutes from '../routes/usuario' //importa la función por defecto
import cors from 'cors'; //importa la función por defecto

import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths= {
        usuarios: '/api/usuarios' //ruta que se utilizará en url
    }

    constructor(){

        this.app= express();
        this.port= process.env.PORT || '8000';

        this.dbConnection();

        //inicializar middlewares
        this.middlewares();

        //definir rutas
        this.routes();

    }

    //conectar BD
    async dbConnection(){
        try {
            await db.authenticate();
            console.log( 'Database Online' );
            
        } catch (error) {
            throw new Error( String(error));
            
        }

    }

    //middlewares
    middlewares(){

        //cors
        this.app.use( cors());

        //lecturA BODY
        this.app.use( express.json() );
       //carpeta pública
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes ) //conexión entre sv y rutas
    }

    listen() {
        this.app.listen( this.port, ()=>{
            console.log( 'Servidor corriendo en el puerto: '+ this.port );
        });
    }

}

export default Server; //unica clase por defecto (Server)