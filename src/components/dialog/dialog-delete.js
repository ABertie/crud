"use client"

import { Delete } from "@/actions/delete"
import { useRef } from "react"
import { toast } from "react-toastify"
import Dialog from "./dialog"
import Button from "../button"

export default function DialogDelete({ user, loader, setLoader }) {
    const dialogRef = useRef(null)

    async function deleteHandler(id) {
        if (!await Delete(id)) {
            toast.error("der skete en fejl. Prøv igen senere.")
            return
        } else {
            toast.success("User er blev slettet")
            setLoader(!loader)
            dialogRef.current.close()
        }
    }

    return (
        <>
            <Button onClick={() => dialogRef.current.showModal()}>
                slet
            </Button>
            <Dialog dialogRef={dialogRef}>
                <p>Er du sikker på du vil slette denne User?</p>
                <p>{user.name.first} {user.name.last}</p>

                <Button onClick={() => deleteHandler(user._id)}>delete</Button>
                <Button onClick={() => dialogRef.current.close()}>Annuller</Button>
            </Dialog>
        </>
    )
}