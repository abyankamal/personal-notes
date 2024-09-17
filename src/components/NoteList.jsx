import React from "react";

function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <small>Dibuat pada: {new Date(note.createdAt).toLocaleString()}</small>
      <div>
        <button onClick={() => deleteNote(note.id)}>Hapus</button>
        <button onClick={() => toggleArchive(note.id)}>
          {note.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
