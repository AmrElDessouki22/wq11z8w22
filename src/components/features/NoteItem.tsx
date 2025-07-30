"use client";

interface NoteItemProps {
  note: string;
}

const NoteItem = ({ note }: NoteItemProps) => (
  <li className="border-b py-2">{note}</li>
);

export default NoteItem;
