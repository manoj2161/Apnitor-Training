import { useState } from "react";

export const ToggleButton = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <div className="border w-36 p-4 rounded-xl m-4 shadow-2xl">
        <p className>Status : {status ? "ON" : "OFF"}</p>
        <button
          onClick={() => {
            status ? setStatus(false) : setStatus(true);
          }}
          className={
            status
              ? "bg-green-600 hover:bg-green-900 w-12 rounded-md text-white"
              : "bg-gray-600 hover:bg-gray-900 w-12 rounded-md text-white"
          }
        >
          {status ? "OFF" : "ON"}
        </button>
      </div>
    </>
  );
};
