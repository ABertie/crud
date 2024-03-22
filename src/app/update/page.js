"use client"

import { ReadAll } from "@/actions/read-all"
import DialogUpdate from "@/components/dialog/dialog-update"
import { useEffect, useState } from "react"

export default function Update() {
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
                <DialogUpdate user={user} loader={loader} setLoader={setLoader}/>
            </li>)}
        </ul>
    )
}