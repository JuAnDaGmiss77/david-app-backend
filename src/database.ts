import {connect} from "mongoose";
import { MONGODB_URI } from "./config";
export const startConnection = async () => {
    try {
        const db = await connect(MONGODB_URI);
        console.log(db.connection.name);
    } catch (error) {
        console.error(error);
    }
}