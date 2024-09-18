/* eslint-disable react/prop-types */
export default function Header({ setSearchQuery }) {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="text-xl font-bold">Personal Notes</h1>
          </a>
        </div>
        <div className="flex mt-2 w-1/2 lg:w-1/4">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="cari catatan disini"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:ml-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </nav>
    </header>
  );
}
