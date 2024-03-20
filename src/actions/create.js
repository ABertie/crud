"use server"

import { connect, disconnect } from "@/lib/db"
import BooksModel from "@/models/books"
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

    connect()
    
    const BookDoc = new BooksModel({ 
        title: title,
        author: author, 
    });

    await BookDoc.save();

    disconnect()

    return { success: true, redirect: "/create" }
}
