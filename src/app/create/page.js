"use client"

import { createBook } from "@/actions/books";
import Input from "@/components/input";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom"
import { toast } from "react-toastify";

export default function Create() {
  const [formState, formAction] = useFormState(createBook)

  useEffect(function () {
    if (!formState?.success) toast.error(formState?._error)
    if (formState?.success) {
      toast.success("book blev create")
      redirect(formState?.redirect)
    }
  }, [formState])

  return (
    <main>
      <form action={formAction}>
        <Input label="title" name="title" statusMassage={formState?.title?._errors[0]} />
        <Input label="forfatter" name="author" statusMassage={formState?.author?._errors[0]} />
        <button>Create</button>
      </form>
    </main>
  )
}
