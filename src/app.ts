import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

class App {

    server: Express

    constructor() {
        
        this.server = express();
        this.AllowJson();
        this.Cors();
        this.Routes();
    }

    Cors():void {
        this.server.use(cors());
    }

    AllowJson():void {
        this.server.use(express.json());
    }

    Routes():void {
        this.server.use(routes);
    }
}



export default new App().server