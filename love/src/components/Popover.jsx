import React from "react";

function Popover() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000008f] flex items-center justify-center">
        <div className="bg-amber-50 h-[22rem] w-[24rem] rounded-md p-4 shadow-lg flex flex-col items-center justify-between">
          <div className="flex justify-center h-full">
            <h1 className="text-2xl font-bold mt-4">Hello Cutiee 😘</h1>
          </div>

          <div>
            <img
              className="w-24 h-24 rounded-md"
              src="/cat2.png"
              alt="Cute Cat"
            />
          </div>

          <div>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer bg-amber-200 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Close 😚
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popover;
