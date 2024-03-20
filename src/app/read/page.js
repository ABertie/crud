import Link from "next/link";

export default function Read() {
    const books = []

    return(
        <ul>
            {books.map(book => <Link href={"/read/" + book._id}><li>{book.title}</li></Link>)}
        </ul>
    )
}