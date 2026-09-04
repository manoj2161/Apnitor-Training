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
        <h1>Calender</h1>
        {selectedHabit ? (
          <div>
            <div>Viewing : {selectedHabit.name}</div>
            <div>Completed Days : {selectedHabit.completedDays.length}</div>
          </div>
        ) : (
          <div>Select a Habit to get the data</div>
        )}
        <div className="flex justify-between mx-4">
          <button onClick={previousMonth}>
            <ArrowLeft />
          </button>
          <h2>
            {monthNames[month]}
            {year}
          </h2>
          <button onClick={nextMonth}>
            <ArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-7">
          {dayNames.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
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
                    isToday && "shadow-lg border ring-2",
                  )}
                >
                  {day}
                </div>
              );
            }
          })}
        </div>

        <div>
          {myhabits.map((habit) => (
            <div
              key={habit.id}
              className={clsx(
                selectedHabit?.id === habit.id && "bg-gray-500",
                "flex gap-2 py-2 items-center",
              )}
            >
              <GripVertical className="w-5 text-gray-600" />
              <p
                className="w-5 h-5 rounded-full ml-2"
                style={{ backgroundColor: habit.color }}
              ></p>
              <p className="w-28">{habit.name}</p>
              <button onClick={() => setSelectedHabit(habit)}>Click</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
