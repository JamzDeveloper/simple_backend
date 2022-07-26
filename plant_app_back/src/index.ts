import dotenv from 'dotenv';
import Server from './server/index';
dotenv.config();

const server = new Server();


server.listen();