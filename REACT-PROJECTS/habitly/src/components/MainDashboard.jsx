import { useEffect, useState } from "react";
import greenLeave from "../assets/greenLeave.png";
import { AddHabit } from "./AddHabit";
import { Habbits } from "./Habbits";
import clsx from "clsx";
export const MainDashboard = () => {
  const [user, setUser] = useState(null);
  const [addHabit, setAddHabit] = useState(false);
  const [myhabits, setMyHabits] = useState([]);
  const [editedHabit, setEditedHabit] = useState(null);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));
    const loggedUser = users.find((user) => user.id === currentUser);
    setUser(loggedUser);
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

  const totalCompletions = myhabits.reduce((acc, habit) => {
    return acc + habit.completedDays.length;
  }, 0);

  function getLargestStreak(habits) {
    let largestStreak = 0;
    let largestStreakHabit = null;

    habits.forEach((habit) => {
      const dates = [...habit.completedDays].sort();

      let currentStreak = dates.length > 0 ? 1 : 0;
      let habitLargestStreak = currentStreak;

      for (let i = 1; i < dates.length; i++) {
        const previousDate = new Date(dates[i - 1]);
        const currentDate = new Date(dates[i]);

        const difference = (currentDate - previousDate) / (1000 * 60 * 60 * 24);

        if (difference === 1) {
          currentStreak++;
        } else {
          currentStreak = 1;
        }

        if (currentStreak > habitLargestStreak) {
          habitLargestStreak = currentStreak;
        }
      }

      if (habitLargestStreak > largestStreak) {
        largestStreak = habitLargestStreak;
        largestStreakHabit = habit;
      }
    });

    return {
      streak: largestStreak,
      habit: largestStreakHabit,
    };
  }
  const result = getLargestStreak(myhabits);

  console.log(result);
  return (
    <>
      <div className="relative">
        <div className="absolute w-[100%]">
          {addHabit && (
            <AddHabit
              editedHabit={editedHabit}
              setAddHabit={setAddHabit}
              setMyHabits={setMyHabits}
              setEditedHabit={setEditedHabit}
            />
          )}
        </div>
        <div className={clsx(addHabit && "opacity-25 pointer-events-none")}>
          <main className="w-full mx-4 relative">
            <div className="p-2 rounded-lg m-2">
              <header className=" flex justify-between items-center px-2 h-16 ">
                <div>
                  <h1 className="font-bold">
                    Welcome , {user !== null && user.name}
                  </h1>
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
                <div className="font-semibold shadow-md border-gray-200 border h-18 w-full flex justify-center items-center rounded-lg">
                  <div>
                    <img className="w-18" src={greenLeave} alt="" />
                  </div>
                  <div>
                    <p className="text-sm">Total Habbits</p>
                    <p>{myhabits.length}</p>
                  </div>
                </div>
                <div className="font-semibold shadow-md border-gray-200 border h-18 w-32 flex justify-center items-center rounded-lg text-center">
                  <div>
                    <p>Total Completions</p>
                    <p>{totalCompletions}</p>
                  </div>
                </div>
                <div className="font-semibold shadow-md border-gray-200 border h-18 w-32 flex justify-center items-center rounded-lg">
                  Largest Streak<p>{result.streak}</p>
                </div>
                <div className="font-semibold shadow-md border-gray-200 border h-18 w-32 flex justify-center items-center rounded-lg">
                  Most Streaked
                  {result.habit !== null && <p>{result.habit.name}</p>}
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
              <Habbits
                setEditedHabit={setEditedHabit}
                setAddHabit={setAddHabit}
                myhabits={myhabits}
                removeHabit={removeHabit}
                setMyHabits={setMyHabits}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
