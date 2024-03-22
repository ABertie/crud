"use server"

import { connect, disconnect } from "@/lib/db"
import user from "@/models/user"

export async function Delete(id) {

    try {
        await connect()
    } catch (error) {
        console.log(error)
        return false
    }

    try {
        await user.findByIdAndDelete(id)
        await disconnect()
        return true
    } catch (error) {
        await disconnect()
        console.log(error)
        return false
    }
}