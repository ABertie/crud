

import { ReadById } from "@/actions/read-one"

export default async function ReadOne({ params }) {
    const { id } = params

    const Users = await ReadById(id)

    return(
        <>
            <p>{Users?.name?.first} {Users?.name?.last}</p>
            <p>age: {Users?.age}</p>
        </>
    )    
}