"use server"

import { connect, disconnect } from "@/lib/db"
import user from "@/models/user"
import { z } from "zod"

const UserValidation = z.object({
    first: z.string().min(1, { message: "this felt must be fill" }),
    last: z.string().min(1, { message: "this felt must be fill" }),
    age: z.number(),
})

export async function create(prevState, formData) {
    const { first, last, age } = Object.fromEntries(formData.entries())

    const validated = UserValidation.safeParse({ first, last, age: Number(age) })

    if (!validated.success) {
        return { success: false, errors: validated.error.flatten().fieldErrors }
    }

    const UserDoc = new user({
        name: {
            first: first,
            last: last,
        },
        age: age,
    });

    try {
        await connect()
    } catch (error) {
        console.log(error)
        return { success: false, error: "Could not connect to database" }
    }

    try {
        await UserDoc.save();
        await disconnect()
        return { success: true, redirect: "/create" }
    } catch (error) {
        await disconnect()
        console.log(error)
        return { success: false, error: "Could not create book" }
    }
}
