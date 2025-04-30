import React, { useState } from "react";
import Popover from "./Popover";

function Home() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-amber-50 h-[22rem] w-[90%] max-w-[24rem] rounded-md py-10 shadow-lg flex flex-col items-center justify-between">
        <div className="flex justify-center h-full">
          <h1 className="text-2xl font-bold mt-4 text-center">
            Hello Cutiee 😘
          </h1>
        </div>

        <div>
          <img
            className="w-[8rem] h-[8rem] rounded-md"
            src="/cat2.png"
            alt="Cute Cat"
          />
        </div>

        <div>
          <button
            onClick={() => {
              setPopoverOpen(!popoverOpen);
            }}
            className="cursor-pointer bg-amber-200 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Click Me! 😚
          </button>
        </div>
      </div>

      {popoverOpen && (
        <div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#0000008f] flex items-center justify-center">
            <div className="bg-amber-50 h-[26rem] w-[90%] max-w-[24rem] py-10 rounded-md p-4 shadow-lg flex flex-col items-center justify-between">
              <div className="flex justify-center h-full">
                <h1 className="text-2xl font-bold mt-4 text-center">
                  I Love You SOOOO Much!! 🙈
                </h1>
              </div>

              <div>
                <img
                  className="w-[13rem] h-[13rem] rounded-md"
                  src="/cat1.png"
                  alt="Cute Cat"
                />
              </div>

              <div>
                <button
                  onClick={() => setPopoverOpen(false)}
                  className="cursor-pointer bg-amber-200 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Close 😁
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
