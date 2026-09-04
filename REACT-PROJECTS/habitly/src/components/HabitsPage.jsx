import { AsideDashboard } from "./AsideDashboard";
import { Pencil, Trash2, GripVertical } from "lucide-react";
import { NoHabbit } from "./NoHabbit";
import { useEffect, useState } from "react";
import { AddHabit } from "./AddHabit";
import clsx from "clsx";
export const HabitsPage = () => {
  const [addHabit, setAddHabit] = useState(false);
  const [myhabits, setMyHabits] = useState([]);
  const [editedHabit, setEditedHabit] = useState(null);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));
    const loggedUser = users.find((user) => user.id === currentUser);
    const userHabits = loggedUser.habits;
    setMyHabits(userHabits);
  }, []);
  function removeHabit(hid) {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));
    const loggedUser = users.find((user) => user.id === currentUser);
    const userHabits = loggedUser.habits;
    const updatedHabits = userHabits.filter((habit) => habit.id !== hid);
    loggedUser.habits = updatedHabits;
    localStorage.setItem("users", JSON.stringify(users));
    setMyHabits(updatedHabits);
  }
  return (
    <>
      <div className="w-full h-screen flex relative">
        <div className="w-[20%] h-screen">
          <AsideDashboard />
        </div>
        <div
          className={clsx(
            addHabit && "opacity-25 pointer-events-none",
            "w-[80%] p-4 h-screen relative flex justify-center ",
          )}
        >
          <div className="relative">
            <div>
              <main className="w-full mx-4 relative">
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
                    <input type="checkbox" name="" id="" /> Streak greater than
                    3 days
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
                  <div>
                    <div className="border-gray-200 border p-4 rounded-lg shadow-lg mx-2">
                      <div>
                        <h2 className="text-xl font-bold pl-2">My Habbits</h2>
                      </div>
                      <div>
                        {myhabits.map((habbit) => (
                          <div
                            key={habbit.id}
                            className="flex gap-2 py-2 justify-evenly items-center"
                          >
                            <GripVertical className="w-5 text-gray-600" />
                            <p
                              className="w-5 h-5 rounded-full ml-2"
                              style={{ backgroundColor: habbit.color }}
                            ></p>
                            <p className="w-28">{habbit.name}</p>
                            <button
                              onClick={() => {
                                setEditedHabit(habbit);
                                setAddHabit(true);
                              }}
                            >
                              <Pencil className="w-5 text-gray-700 mb-2" />
                            </button>
                            <button
                              onClick={() => {
                                removeHabit(habbit.id);
                              }}
                            >
                              <Trash2 className="w-5 mb-2 text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {myhabits.length === 0 && (
                      <div>
                        <NoHabbit addHabit={setAddHabit} />
                      </div>
                    )}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        {addHabit && (
          <AddHabit
            setAddHabit={setAddHabit}
            setMyHabits={setMyHabits}
            editedHabit={editedHabit}
            setEditedHabit={setEditedHabit}
          />
        )}
      </div>
    </>
  );
};
