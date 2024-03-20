"use server"

import { z } from "zod"

const BookSchema = z.object({
    title: z.string().min(1, { message: "Dette felt skal udfyldes" }),
    author: z.string().min(1, { message: "Dette felt skal udfyldes" }),
})

export async function createBook(prevState, formData) {
    const title = formData.get("title")
    const author = formData.get("author")

    const validated = BookSchema.safeParse({ title, author })

    if (!validated.success) {
        return validated.error.format()
    }

    return { success: true, redirect: "/create" }
}
