/* eslint-disable react/prop-types */
function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-3 gap-y-4 p-4 lg:p-16 mx-auto">
      <div className="bg-white rounded-lg shadow-2xl mx-auto px-10 overflow-hidden hover:overflow-visible transform transition-transform duration-500 hover:-translate-y-4 lg:hover:-translate-y-12">
        <div className="relative">
          <h3 className="font-bold text-xl text-center">{note.title}</h3>
          <p className="font-normal text-balance text-justify">{note.body}</p>
          <small>
            Dibuat pada: {new Date(note.createdAt).toLocaleString()}
          </small>
          <div className="grid grid-flow-col grid-cols-2 justify-between">
            <button onClick={() => deleteNote(note.id)}>Hapus</button>
            <button onClick={() => toggleArchive(note.id)}>
              {note.archived ? "Pindahkan" : "Arsipkan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
