import { useState } from "react";
import clsx from "clsx";
export const StatusCard = () => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <h1>User : Manoj</h1>
      <h2
        className={clsx(
          "p-2 rounded-lg w-36 text-white",
          status && "bg-green-500",
          !status && "bg-red-500",
        )}
      >
        Status : {status ? "Active" : "Inactive"}
      </h2>
      <button
        onClick={() => {
          status ? setStatus(false) : setStatus(true);
        }}
        className="bg-black m-4 text-white p-1 rounded-md"
      >
        Toggle Status
      </button>
    </div>
  );
};
