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

  function formatDate(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  }
  console.log(formatDate(new Date(2026, 8, 3)));
  return <></>;
}

export default App;
