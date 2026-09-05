import { useEffect, useState } from "react";
import { AsideDashboard } from "./AsideDashboard";
import { GripVertical, ArrowRight, ArrowLeft } from "lucide-react";
import clsx from "clsx";
export const CalendarPage = () => {
  const [myhabits, setMyHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    const loggedUser =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));

    const existingUser = data.find((user) => user.id === loggedUser);
    if (!existingUser) {
      return;
    }

    const habits = existingUser.habits;
    setMyHabits(habits);
  }, []);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1);
  const startingEmptyDays = (firstDay.getDay() + 6) % 7;
  const calendarDays = [];
  for (let i = 0; i < startingEmptyDays; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function nextMonth() {
    const date = new Date(currentDate);

    date.setMonth(month + 1);

    setCurrentDate(date);
  }
  function previousMonth() {
    const date = new Date(currentDate);

    date.setMonth(month - 1);

    setCurrentDate(date);
  }

  return (
    <div className="w-full h-screen flex">
      <div className="w-[20%] h-screen">
        <AsideDashboard />
      </div>

      <div className="w-[80%] p-4">
        <div>
          <h1 className="text-[64px] font-bold text-center text-[#c54c24] shadow-lg rounded">
            Calendar
          </h1>
        </div>
        {selectedHabit ? (
          <div className="h-16 my-4 text-center text-gray-600">
            <div className="my-2">
              Viewing :
              <span
                style={{ color: selectedHabit.color }}
                className="font-bold text-xl"
              >
                {selectedHabit.name}
              </span>
            </div>
            <div>
              Completed Days :
              <span
                style={{ color: selectedHabit.color }}
                className="font-bold text-xl"
              >
                {selectedHabit.completedDays.length}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-xl text-center my-4 text-gray-600">
            Select a Habit to get the data
          </div>
        )}
        <div className=" shadow-xl p-8 rounded-lg bg-[#fef9f3]">
          <div className="flex justify-between mx-2">
            <button
              className="rounded px-2 py-1 my-2 shadow-xl border border-[#c54c24] text-[#c54c24]"
              onClick={previousMonth}
            >
              <ArrowLeft />
            </button>
            <h2 className="text-xl font-semibold text-[#c54c24]">
              {monthNames[month]},{year}
            </h2>
            <button
              className="rounded px-2 my-2 shadow-xl border border-[#c54c24] text-[#c54c24]"
              onClick={nextMonth}
            >
              <ArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-7 text-lg my-4 place-items-center text-[#c54c24]">
            {dayNames.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 text-lg place-items-center text-[#9d623d] gap-4">
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={index}></div>;
              } else {
                const dateString = `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
                const isCompleted =
                  selectedHabit?.completedDays?.includes(dateString);
                const today = new Date();
                const isToday =
                  year === today.getFullYear() &&
                  month === today.getMonth() &&
                  day === today.getDate();
                console.log(isToday);
                return (
                  <div
                    style={{
                      backgroundColor: isCompleted
                        ? selectedHabit?.color
                        : undefined,
                    }}
                    key={index}
                    className={clsx(
                      isCompleted && `rounded-full w-6`,
                      isToday &&
                        "shadow-lg rounded-lg px-2 shadow bg-orange-200 text-[#c54c24]",
                      "hover:shadow-lg hover:rounded-lg hover:bg-orange-200 hover:px-2 hover:shadow hover:text-[#c54c24]",
                    )}
                  >
                    {day}
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="shadow-lg my-8 border border-t-transparent rounded border-gray-100">
          <h1 className="text-center m-4 text-3xl font-bold text-[]">
            My habits
          </h1>
          {myhabits.map((habit) => (
            <div
              key={habit.id}
              className={clsx(
                selectedHabit?.id === habit.id && "bg-[#9F643D] text-white",
                "flex justify-between gap-2 py-2 items-center ",
                "mx-2 my-4 shadow-lg border rounded border-gray-300",
              )}
            >
              <div className="flex gap-4 ml-4">
                <GripVertical className="w-5 text-gray-400" />
                <p
                  className="w-5 h-5 rounded-full ml-2"
                  style={{ backgroundColor: habit.color }}
                ></p>
                <p className="w-28 ml-4 ">{habit.name}</p>
              </div>
              <div className="mr-4">
                <button
                  className=" p-2 rounded shadow-md bg-orange-100 font-semibold text-[#c54c24]"
                  onClick={() => setSelectedHabit(habit)}
                >
                  Click to get Data
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
