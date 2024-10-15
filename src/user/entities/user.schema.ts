import { Schema } from "mongoose";
import { User } from "./user.interface";

export const UserSchema = new Schema<User>({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    }
}, {timestamps: true})