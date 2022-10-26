import { Note } from "./noteInterface"

export interface Props {
    notes: Note[]
    addNotes: (text: string) => void
    deleteNote: (id: string) => void
    // setNote: React.Dispatch<React.SetStateAction<Note[]>>
}

export interface NoteProps {
    id: string,
    note: string,
    // title: string,
    date: string,
    deleteNote: (id: string) => void
}

export interface AddNoteProps {
    addNotes: (text: string) => void
}

export interface SearchBarProps {
    searchNote: React.Dispatch<React.SetStateAction<string>>
}