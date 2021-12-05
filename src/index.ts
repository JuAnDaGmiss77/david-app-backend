import dotenv from 'dotenv';
dotenv.config();
import app from "./app";
import {startConnection} from "./database";
import {PORT} from "./config"

startConnection();
app.listen(PORT);
console.log('server is running in port', PORT);