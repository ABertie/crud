"use server"

import { connect, disconnect } from "@/lib/db"
import user from "@/models/user"

export async function ReadById(id) {

    try {
        await connect()
    } catch (error) {
        console.log(error)
        return []
    }

    try {
        const users = await user.findById(id)
        await disconnect()
        return JSON.parse(JSON.stringify(users))
    } catch (error) {
        await disconnect()
        console.log(error)
        return []  
    }
}