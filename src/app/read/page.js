import { ReadAll } from "@/actions/read-all";
import Link from "next/link";

export default async function Read() {
    const Users = await ReadAll()

    return (
        <ul>
            {Users.map(user => <li key={user._id}>
                <Link href={`/read/${user._id}`}>
                    {user.name.first} {user.name.last}
                </Link>
            </li>)}
        </ul>
    )
}