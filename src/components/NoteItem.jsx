/* eslint-disable react/prop-types */
function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-3 gap-y-4 p-4 lg:p-16 mx-auto">
      <div className="bg-white rounded-lg shadow-2xl mx-auto px-10 overflow-hidden hover:overflow-visible transform transition-transform duration-500 hover:-translate-y-4 lg:hover:-translate-y-12 w-full">
        <div className="relative">
          <h3 className="font-bold text-xl text-center">{note.title}</h3>
          <p className="font-normal text-balance text-justify">{note.body}</p>
          <small>
            Dibuat pada: {new Date(note.createdAt).toLocaleString()}
          </small>
          <div className="grid grid-flow-col grid-cols-2 justify-between">
            <button
              onClick={() => deleteNote(note.id)}
              className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              <p className="text-center">Hapus</p>
            </button>
            <button
              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              onClick={() => toggleArchive(note.id)}
            >
              <p className="text-center">
                {note.archived ? "Kembalikan" : "Arsipkan"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
