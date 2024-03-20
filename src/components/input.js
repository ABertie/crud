"use client"

import { useState } from "react"

export default function Input({ label, name, type = "text", placeholder = "", value = "", statusMassage = "", className }) {
    const [valueState, setValueState] = useState(value)

    return (
        <label className={`relative py-4 block ${className}`} >
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={valueState}
                onChange={event => setValueState(event.target.value)}
                className={`bg-slate-100 border-slate-200 border rounded text-slate-700 w-full px-2 py-1 my-1 peer ${statusMassage ? "outline outline-red-300 outline-2" : ""}`}
            />
            <span className="absolute top-6 left-1 text-slate-700 [transition:all_500ms_ease-in-out] 
            peer-focus:-top-1 peer-focus:text-sm 
            peer-[:not([value=''])]:-top-1 peer-[:not([value=''])]:text-sm">{label}</span>
            <span className="absolute left-1 bottom-1 text-xs text-red-400 font-semibold block">{statusMassage}</span>
        </label>
    )
}