import { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Header from "./components/Header";

// Import getInitialData
import { getInitialData } from "./utils";

function App() {
  const [notes, setNotes] = useState(getInitialData); // Inisialisasi state dengan data dari utils
  const [searchQuery, setSearchQuery] = useState("");

  const addNote = (note) => setNotes([...notes, note]);

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      <NoteForm addNote={addNote} />
      <h2 className="text-2xl font-semibold my-2 text-center">Catatan Aktif</h2>
      <NoteList
        notes={filteredNotes.filter((note) => !note.archived)}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />
      <h2 className="text-2xl font-semibold my-2 text-center">
        Catatan Diarsipkan
      </h2>
      <NoteList
        notes={filteredNotes.filter((note) => note.archived)}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />
    </div>
  );
}

export default App;
