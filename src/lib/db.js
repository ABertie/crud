import mongoose from "mongoose";

export async function connect() {
	await mongoose.connect(process.env.DB_URL)
}

export async function disconnect() {
	await mongoose.disconnect()
}