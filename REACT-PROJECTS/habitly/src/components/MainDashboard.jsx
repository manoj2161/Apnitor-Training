import { useState } from "react";
import { AddHabit } from "./AddHabit";
import { Habbits } from "./Habbits";
import clsx from "clsx";
export const MainDashboard = () => {
  const [addHabit, setAddHabit] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="absolute w-[100%]">
          {addHabit && <AddHabit setAddHabit={setAddHabit} />}
        </div>
        <div className={clsx(addHabit && "opacity-9")}>
          <main className="w-full mx-4 relative">
            <div className="p-2 rounded-lg m-2">
              <header className=" flex justify-between items-center px-2 h-16 ">
                <div>
                  <h1 className="font-bold">Good Morning , Sir/Madam</h1>
                </div>
                <div>
                  <button
                    onClick={() => setAddHabit((prev) => !prev)}
                    className="bg-[#dd4b25] p-2 rounded-md text-white text-sm shadow-md"
                  >
                    + Add Habbit
                  </button>
                </div>
              </header>
              <section className="flex justify-evenly items-center ">
                <div className="font-semibold shadow-md border-gray-200 border h-18 w-32 flex justify-center items-center rounded-lg">
                  Total Habbits
                </div>
                <div className="font-semibold shadow-md border-gray-200 border h-18 w-32 flex justify-center items-center rounded-lg text-center">
                  Total Completions
                </div>
                <div className="font-semibold shadow-md border-gray-200 border h-18 w-32 flex justify-center items-center rounded-lg">
                  Largest Streak
                </div>
                <div className="font-semibold shadow-md border-gray-200 border h-18 w-32 flex justify-center items-center rounded-lg">
                  Most Streaked
                </div>
              </section>
            </div>
            <section className="flex justify-between h-16 items-center shadow rounded m-2">
              <div>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Habbit"
                  className="border rounded border-gray-300 w-68 ml-2 pl-2 py-1 focus:outline-none"
                />
              </div>
              <div>
                <input type="checkbox" name="" id="" /> Streak greater than 3
                days
              </div>
              <div>
                <select
                  name="sort"
                  id=""
                  className="border border-gray-300 rounded mr-2 p-1"
                >
                  <option value="">High to Low</option>
                  <option value="">Low to High</option>
                </select>
              </div>
            </section>
            <div>
              <Habbits addHabit={setAddHabit} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
