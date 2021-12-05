import {config} from 'dotenv';
config();

export const MONGODB_URI: string = process.env.MONGODB_URI  || 'mongodb://localhost/david-database';

export const PORT: string = process.env.PORT || '3000';