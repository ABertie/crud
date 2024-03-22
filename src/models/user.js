import { Schema, model, models } from "mongoose"

export const UserSchema = new Schema({
    name: {
        first: {
            type: String,
            required: [true, "you must provide a first name"],
        },
        last: {
            type: String,
            required: [true, "you must provide a last name"],
        }
    },
    age: Number,
}, { timestamps: true })

export default models.User || model("User", UserSchema)
