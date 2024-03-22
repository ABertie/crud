
export default function Dialog({ children, dialogRef }) {
    return(
        <dialog ref={dialogRef}>
            {children}
        </dialog>
    )
}