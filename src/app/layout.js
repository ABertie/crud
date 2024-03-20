import Link from "next/link";
import "./globals.css";

// required for toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "CRUD",
  description: "Create, Read, Update, Delete",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/create">create</Link>
          <Link href="/read">resd</Link>
          <Link href="/update">update</Link>
          <Link href="/delete">delete</Link>
        </header>
        {children}
        <ToastContainer 
          position="bottom-left"
        />
      </body> 
    </html>
  )
}
