"use client"

import { ReadAll } from "@/actions/read-all"
import DialogDelete from "@/components/dialog/dialog-delete"
import { useEffect, useState } from "react"

export default function Delete() {
    const [loader, setLoader] = useState(false)
    const [users, setUsers ] = useState([])

    useEffect(function() {
        (async function() {
            setUsers(await ReadAll())
        })()
    }, [loader])

    return (
        <ul>
            {users.map(user => <li key={user._id}>
                {user.name.first + " " + user.name.last}
                <DialogDelete user={user} loader={loader} setLoader={setLoader}/>
            </li>)}
        </ul>
    )
}