import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    company: String,
    location: String,
    created_at: {type: Date, default: Date.now},
}) 