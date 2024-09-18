/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, toggleArchive }) {
  if (notes.length === 0) {
    return (
      <p className="text-xl font-normal my-2 text-center">Tidak ada catatan</p>
    );
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          toggleArchive={toggleArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;
