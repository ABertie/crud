"use client"

import { create } from "@/actions/create";
import Input from "@/components/input";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom"
import { toast } from "react-toastify";

export default function Create() {
  // når et state updateres eller ændres bliver alle componenter der er afhængi af det genlæst
  const [formState, formAction] = useFormState(create) 
  // brug useFormState til at diskutre mellem backenden og form

  useEffect(function () {
    if (!formState?.success) toast.error(formState?._error)
    if (formState?.success) {
      toast.success("User created")
      redirect(formState?.redirect)
    }
  }, [formState])

  return (
    <main>
      <form action={formAction}>
        <Input label="First name" name="first" statusMassage={formState?.firstName?._errors[0]} />
        <Input label="last name" name="last" statusMassage={formState?.lastName?._errors[0]} />
        <Input label="Age" name="age" type="number" statusMassage={formState?.age?._errors[0]} />
        <button>Create</button>
      </form>
    </main>
  )
}
