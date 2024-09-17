import Header from "./components/Header";
import NoteForm from "./components/NoteForm";

export default function App() {
  return (
    <div>
      <Header />
      <NoteForm />
      <h2 className="text-2xl font-semibold mb-2">Notes</h2>
      <NoteForm />
    </div>
  );
}
