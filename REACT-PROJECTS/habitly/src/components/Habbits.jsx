import { Pencil, Trash2, GripVertical } from "lucide-react";
import { NoHabbit } from "./NoHabbit";
export const Habbits = ({
  setAddHabit,
  myhabits,
  removeHabit,
  setEditedHabit,
  setMyHabits,
}) => {
  const checkbox =
    "h-4 w-4 appearance-none rounded-full border-2 border-orange-300 checked:bg-orange-300";
  const todayDate = new Date().toLocaleDateString("en-CA");
  const today = new Date();
  const day = today.getDay();
  const daysFromMonday = day === 0 ? 6 : day - 1;
  today.setDate(today.getDate() - daysFromMonday);
  const weekDays = [];
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let i = 0; i < 7; i++) {
    weekDays.push({
      date: today.toLocaleDateString("en-CA"),
      day: dayNames[i],
    });
    today.setDate(today.getDate() + 1);
  }

  function toggleHabitDay(id, date) {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));
    const loggedUser = users.find((user) => user.id === currentUser);
    const habits = loggedUser.habits;
    const habit = habits.find((habit) => habit.id === id);
    if (habit.completedDays.includes(date)) {
      habit.completedDays = habit.completedDays.filter((day) => day !== date);
    } else {
      habit.completedDays.push(date);
    }
    localStorage.setItem("users", JSON.stringify(users));
    setMyHabits(habits);
  }
  return (
    <>
      <div>
        <div className="border-gray-200 border p-4 rounded-lg shadow-lg mx-2">
          <div>
            <h2 className="text-xl font-bold pl-2">My Habbits</h2>
          </div>
          <div>
            {myhabits.map((habbit) => (
              <div
                key={habbit.id}
                className="flex gap-2 py-2 justify-between items-center"
              >
                <GripVertical className="w-5 text-gray-600" />
                <p
                  className="w-5 h-5 rounded-full ml-2"
                  style={{ backgroundColor: habbit.color }}
                ></p>
                <p className="w-28">{habbit.name}</p>
                <div className="flex gap-4">
                  {weekDays.map((day) => (
                    <div key={day.date} className="flex flex-col items-center">
                      <input
                        type="checkbox"
                        checked={habbit.completedDays.includes(day.date)}
                        disabled={day.date !== todayDate}
                        onChange={() => toggleHabitDay(habbit.id, day.date)}
                        className={checkbox}
                      />
                      <span>{day.day}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setAddHabit(true);
                    setEditedHabit(habbit);
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
    </>
  );
};
