"use client";

import { useContext } from 'react';
import { NotesContext } from '@/contexts/NotesContext';
import NoteItem from '@/components/features/NoteItem';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import Input from '@/components/ui/Input';

const NoteList = () => {
  const { notes, addNote } = useContext(NotesContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText('');
      setModalOpen(false);
    }
  };

  return (
    <div>
      <Button label="Add Note" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Input value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="Enter note text" />
        <Button label="Save Note" onClick={handleAddNote} />
      </Modal>
      <ul>
        {notes.map((note, index) => (
          <NoteItem key={index} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
