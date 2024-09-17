import React from "react";

function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-3 gap-y-4 p-4 lg:p-16 mx-auto">
      <div className="bg-white rounded-lg shadow-2xl mx-auto overflow-hidden hover:overflow-visible transform transition-transform duration-500 hover:-translate-y-4 lg:hover:-translate-y-12">
        <div className="relative">
          <h3></h3>
        </div>
        <p
          className="text-black text-justify text-balance py-4 mx-auto w-48 lg:w-64"
          id="charcoalBbqText"
        >
          These charcoal briquettes are made from various materials such as
          sawdust and coconut shells
        </p>
      </div>
      <div className="bg-white text-black rounded-lg shadow-2xl mx-auto overflow-hidden hover:overflow-visible transform transition-transform duration-500 hover:-translate-y-4 lg:hover:-translate-y-12">
        <div className="relative">
          <Image
            src={arangkayu}
            alt="arangkayu"
            className="h-96 w-[300px] object-cover mx-auto"
          />
          <div className="flex items-center w-48 left-0 right-0 absolute -bottom-4 bg-white border-2 border-black px-4 py-2 text-center mx-auto justify-center">
            <p
              className="text-sm uppercase font-bold font-lato tracking-wider"
              id="hardwoodTitle"
            >
              HARDWOOD CHARCOAL
            </p>
          </div>
        </div>
        <p
          className="text-justify text-balance py-4 mx-auto w-48 lg:w-64"
          id="hardwoodText"
        >
          Our wood charcoal is made from selected wood, ranging from halaban
          wood, mahogany wood, tamarind wood or can also be mixed with other
          hardwoods.
        </p>
      </div>
      <div className="bg-white text-black rounded-lg shadow-2xl mx-auto overflow-hidden hover:overflow-visible transform transition-transform duration-500 hover:-translate-y-4 lg:hover:-translate-y-12">
        <div className="relative">
          <Image
            src={arangkelapa}
            alt="arangkelapa"
            className="h-96 w-[300px] object-cover mx-auto"
          />
          <div className="flex items-center w-48 left-0 right-0 absolute -bottom-4 bg-white border-2 border-black px-4 py-2 text-center mx-auto justify-center">
            <p
              className="text-sm uppercase font-bold font-lato tracking-wider"
              id="coconutTitle"
            >
              COCONUT SHELL CHARCOAL
            </p>
          </div>
        </div>
        <p
          className="text-justify text-balance py-4 mx-auto w-48 lg:w-64"
          id="coconutText"
        >
          Our coconut shell charcoal is a material that can be used for various
          types of needs.
        </p>
      </div>
    </div>
  );
}

export default NoteItem;
