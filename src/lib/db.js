import mongoose from "mongoose";

export async function connect() {
	await mongoose.connect(process.env.DB_URL)
}

export function disconnect() {
	mongoose.disconnect()
}