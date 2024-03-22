"use client"

import { useEffect, useRef } from "react"
import { toast } from "react-toastify"
import Dialog from "./dialog"
import Button from "../button"
import { Update } from "@/actions/update"
import { useFormState } from "react-dom"
import Input from "../input"

export default function DialogUpdate({ user, loader, setLoader }) {
    const [formState, formAction] = useFormState(Update)
    const dialogRef = useRef(null)

    useEffect(function() {
        if (formState && !formState.success) {
            toast.error("der skete en fejl. Prøv igen senere.")
            return
        } else if (formState?.success) {
            toast.success("User er blev updated")
            setLoader(!loader)
            dialogRef.current.close()
        }
    }, [formState])

    return (
        <>
            <Button onClick={() => dialogRef.current.showModal()}>
                update
            </Button>
            <Dialog dialogRef={dialogRef}>
                <form action={formAction}>
                    <input value={user._id} type="hidden" name="id"/>
                    <Input label="First name" name="first" value={user.name.first} statusMassage={formState?.firstName?._errors[0]} />
                    <Input label="last name" name="last" value={user.name.last}  statusMassage={formState?.lastName?._errors[0]} />
                    <Input label="Age" name="age" type="number" value={user.age}  statusMassage={formState?.age?._errors[0]} />

                    <Button type="submit">gem</Button>
                    <Button onClick={() => dialogRef.current.close()}>Annuller</Button>
                </form>
            </Dialog>
        </>
    )
}