import { Note } from "./noteInterface"

export interface Props {
    notes: Note[]
    addNotes: (text: string) => void
    // setNote: React.Dispatch<React.SetStateAction<Note[]>>
}

export interface NoteProps {
    id: string,
    note: string,
    // title: string,
    date: string,
}

export interface AddNoteProps {
    addNotes: (text: string) => void
}