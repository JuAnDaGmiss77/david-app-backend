import {Schema, model, Document} from "mongoose";

export interface IP extends Document {
    ip: string;
}

const ipSchema = new Schema({
    ip: {
        type: String,
    }

},{
    timestamps: false,
    versionKey: false
})

export default model<IP>('Ip', ipSchema);