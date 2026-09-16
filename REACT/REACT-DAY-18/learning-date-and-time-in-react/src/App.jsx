function App() {
  // const now = new Date();

  // console.log("Year:", now.getFullYear());
  // console.log("Month:", now.getMonth());
  // console.log("Date:", now.getDate());
  // console.log("Day:", now.getDay());

  // console.log("Hours:", now.getHours());
  // console.log("Minutes:", now.getMinutes());
  // console.log("Seconds:", now.getSeconds());
  // console.log("Milliseconds:", now.getMilliseconds());
  // console.log(now.toString());
  // console.log(now.toDateString());
  // // console.log(now.toTimeString());
  // console.log("Original:", now);
  // console.log("String:", now.toString());
  // console.log("Date:", now.toDateString());
  // console.log("Time:", now.toTimeString());

  // console.log(now.toLocaleDateString());
  // console.log(now.toLocaleDateString("en-US"));
  // console.log(now.toLocaleDateString("en-GB"));
  // console.log(now.toLocaleTimeString());
  // console.log(now.toLocaleTimeString("en-US"));
  // console.log(now.toLocaleTimeString("en-GB"));
  // console.log(now.toLocaleString());

  // console.log(
  //   now.toLocaleDateString("en-US", {
  //     day: "numeric",
  //     month: "long",
  //     year: "numeric",
  //   }),
  // );
  // console.log(
  //   now.toLocaleTimeString("en-US", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   }),
  // );

  // const date = new Date(2026, 7, 30);
  // console.log(date.setDate(date.getDate() - date.getDay() + 1));
  // console.log(date);

  // console.log(date);
  // console.log(date.getFullYear());
  // console.log(date.getMonth());
  // console.log(date.getDate());

  // const date = new Date(2026, 8, 3);
  // date.setDate(date.getDate() - date.getDay() + 1);
  // for (let i = 0; i < 7; i++) {
  //   console.log(date.toDateString());

  // //   date.setDate(date.getDate() + 1);
  // }
  // console.log(Date.now());

  // const date = new Date();

  // console.log(date.getTime());

  // const date1 = new Date(2026, 8, 3);
  // const date2 = new Date(2026, 8, 5);

  // console.log(date1 < date2);
  // console.log(date1 > date2);
  // console.log(date1 === date2);

  // const date1 = new Date(2026, 8, 3);
  // const date2 = new Date(2026, 8, 3);

  // console.log(date1 === date2);
  // console.log(date1.getTime() === date2.getTime());
  // console.log(date1.getTime() < date2.getTime());

  // const today = new Date();
  // const habitDate = new Date(2026, 8, 3);

  // if (
  //   habitDate.getFullYear() === today.getFullYear() &&
  //   habitDate.getMonth() === today.getMonth() &&
  //   habitDate.getDate() === today.getDate()
  // ) {
  //   return console.log("today");
  // }

  // const habitDate = new Date(2026, 8, 3);
  // function isToday(hdate) {
  //   const date = new Date();
  //   if (
  //     date.getDate() === hdate.getDate() &&
  //     date.getMonth() === hdate.getMonth() &&
  //     date.getFullYear() === hdate.getFullYear()
  //   ) {
  //     return true;
  //   }
  // }
  // console.log(isToday(habitDate));

  // const date1 = new Date(2026, 8, 3);
  // const date2 = new Date(2026, 8, 10);

  // const difference = date2.getTime() - date1.getTime();
  // const days = difference / (1000 * 60 * 60*24);
  // console.log(days);

  // const today = new Date();
  // const monday = new Date(today);
  // monday.setDate(monday.getDate() - monday.getDay() + 1);
  // for (let i = 0; i < 7; i++) {
  //   console.log(monday.toDateString());

  //   monday.setDate(monday.getDate() + 1);
  // }

  // function formatDate(date) {
  //   return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  // }
  // console.log(formatDate(new Date(2026, 8, 3)));

  // const date = new Date("2026-09-03");

  // console.log(date);
  // console.log(date.getFullYear());
  // console.log(date.getMonth());
  // console.log(date.getDate());

  // const date1 = new Date(2026, 8, 3);

  // console.log(date1.toString());
  // console.log(date2.toString());

  // console.log(date1.getTime());
  // console.log(date2.getTime());

  // const date = new Date("2026-09-03");
  // function fromatDate(date) {
  //   const month = (date.getMonth() + 1).toString().padStart(2, "0");
  //   const day = date.getDate().toString().padStart(2, "0");
  //   const year = date.getFullYear();
  //   return `${year}-${month}-${day}`;
  // }

  // console.log(fromatDate(date));
  // const date = new Date(2026, 8, 3);

  // console.log(date.toString());
  // console.log(date.toISOString());

  //  const date = new Date(2026, 8, 6);

  //  const day = date.getDay();

  //  const daysFromMonday = day === 0 ? 6 : day - 1;

  //  date.setDate(date.getDate() - daysFromMonday);

  //  console.log(date.toDateString());

  // const date = new Date();
  // const todayString = new Date().toLocaleDateString("en-CA");
  // const day = date.getDay();

  // const daysFromMonday = day === 0 ? 6 : day - 1;

  // date.setDate(date.getDate() - daysFromMonday);
  // const week = [];
  // const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // for (let i = 0; i < 7; i++) {
  //   week.push({
  //     date: date.toLocaleDateString("en-CA"),
  //     day: dayNames[i],
  //   });
  //   date.setDate(date.getDate() + 1);
  // }

  // const today = week.find((day) => day.date === todayString);
  // const dates = week.map((day) => day.date);
  // const weekend = week.filter((day) => day.day === "Sat" || day.day === "Sun");

  // const daysBeforeToday = week.filter((day) => day.date < todayString);
  // const pastDates = daysBeforeToday.map((day) => day.date);
  // // console.log(pastDates);
  // const completedDays = ["2026-09-01", "2026-09-03", "2026-09-04"];
  // const checkedDate = "2026-09-03";
  // // const completed = completedDays.some((day) => day === checkedDate);
  // const completed = completedDays.includes("2026-09-02");
  // console.log(completed);

  // const completedDays = ["2026-09-01", "2026-09-03"];

  // const checkedDate = "2026-09-04";
  // completedDays.push(checkedDate);
  // console.log(completedDays);

  // const completedDays = ["2026-09-01", "2026-09-03", "2026-09-04"];

  // const checkedDate = "2026-09-03";
  // const updatedCompletedDays = completedDays.filter(
  //   (day) => day !== checkedDate,
  // );
  // console.log(updatedCompletedDays);

  // const dates = ["2026-09-04", "2026-09-01", "2026-09-03", "2026-09-02"];

  // dates.sort((a, b) => a.localeCompare(b));

  // console.log(dates);
  // const completedDays = [
  //   "2026-09-04",
  //   "2026-09-01",
  //   "2026-09-06",
  //   "2026-09-03",
  // ];

  // const sorted = completedDays.sort((a, b) => a.localeCompare(b));
  // console.log(sorted);

  // const habit = {
  //   id: 1,
  //   name: "Exercise",
  //   completedDays: [
  //     "2026-08-28",
  //     "2026-08-29",
  //     "2026-09-01",
  //     "2026-09-03",
  //     "2026-09-04",
  //   ],
  // };
  // const totalCompletions = habit.completedDays.reduce((acc) => {
  //   return acc + 1;
  // }, 0);
  // console.log(totalCompletions);

  const habits = [
    {
      id: 1,
      name: "Exercise",
      completedDays: ["2026-09-01", "2026-09-03", "2026-09-04"],
    },
    {
      id: 2,
      name: "Read Book",
      completedDays: ["2026-09-02", "2026-09-04"],
    },
    {
      id: 3,
      name: "Drink Water",
      completedDays: ["2026-09-01", "2026-09-02", "2026-09-03", "2026-09-04"],
    },
  ];

  const totalCompletions = habits.reduce((acc, habit) => {
    return acc + habit.completedDays.length;
  }, 0);
  console.log(totalCompletions);
  const today = new Date().toLocaleDateString("en-CA");
  const completedToday = habits.reduce((acc, habit) => {
    if (habit.completedDays.includes(today)) {
      return acc + 1;
    }
    return acc;
  }, 0);
  console.log(completedToday);
  return (
    <>
      <div>
        {/* {week.map((day) => (
          <div>
            <input type="checkbox" disabled={today.date !== day.date} />
            <p>{day.date}</p>
            <p>{day.day}</p>
          </div>
        ))} */}

        {/* {daysBeforeToday.map((day) => (
          <div>
            <p>{day.date}</p>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default App;
