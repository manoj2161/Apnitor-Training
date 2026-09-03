import { useEffect, useState } from "react";
import girlImage from "../assets/girlImage.png";
import { Pen, X } from "lucide-react";
import clsx from "clsx";

export const AddHabit = ({
  setAddHabit,
  setMyHabits,
  editedHabit,
  setEditedHabit,
}) => {
  const [habit, setHabit] = useState({
    id: crypto.randomUUID(),
    name: "",
    color: "",
    entryDate: new Date().toLocaleDateString("en-CA"),
    completedDays: [],
  });
  const [errors, setErrors] = useState({});
  const habitColors = [
    "#7FAF6A",
    "#F5A04C",
    "#EF6461",
    "#9B72D9",
    "#5D8FD8",
    "#4DB6B8",
    "#E982B2",
    "#A7A9AC",
  ];
  function handleHabitChange(e) {
    const { name, value } = e.target;
    setHabit((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => {
      const nextErrors = { ...prev };
      delete nextErrors[name];
      return nextErrors;
    });
  }
  function addHabit(e) {
    e.preventDefault();
    const newErrors = {};
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users"));
    if (!habit.name.trim()) {
      newErrors.name = "Please enter a habit";
    }
    if (!habit.color) {
      newErrors.color = "Please select a color";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const existingUser = users.find((user) => user.id === currentUser);
    if (!existingUser) {
      return;
    }
    if (editedHabit === null) {
      existingUser.habits.push(habit);
      localStorage.setItem("users", JSON.stringify(users));
      setMyHabits(existingUser.habits);
      setAddHabit((prev) => !prev);
    }
    if (editedHabit !== null) {
      const habitID = existingUser.habits.findIndex(
        (habit) => habit.id === editedHabit.id,
      );
      existingUser.habits[habitID] = {
        ...existingUser.habits[habitID],
        name: habit.name,
        color: habit.color,
      };
      localStorage.setItem("users", JSON.stringify(users));
      setMyHabits(existingUser.habits);
      setEditedHabit(null);
      setAddHabit((prev) => !prev);
    }
  }
  useEffect(() => {
    if (editedHabit) {
      setHabit(editedHabit);
    }
  }, [editedHabit]);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-118 p-4 rounded-lg shadow shadow-[#dd4b25] bg-[#fdfaf2] z-50 flex flex-col gap-8 relative">
          <X
            onClick={() => setAddHabit((prev) => !prev)}
            className="absolute right-4 text-[#a97c5e]"
          />
          <div className="flex">
            <div>
              <h1 className="text-3xl font-bold">Add New Habit</h1>
              <p className="text-sm mt-2 text-[#a8856d] font-semibold">
                Start a new habit and <br />
                build a better you.
              </p>
            </div>
            <div>
              <img src={girlImage} alt="" className="w-48" />
            </div>
          </div>
          <div className="flex flex-col gap-2 relative">
            <div className="relative  h-18">
              <label htmlFor="habit" className="font-semibold">
                Habit Name
              </label>
              <Pen className="absolute left-2 top-7 w-5 text-[#a97c5e]" />
              <input
                type="text"
                name="name"
                id=""
                value={habit.name}
                onChange={handleHabitChange}
                className="border border-[#a97c5e] rounded-md w-98 h-8 pl-8 focus:outline-none"
                placeholder="eg. Drink water"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          </div>
          <div className=" relative h-24">
            <p className="font-semibold mb-4">Choose a color</p>
            <div className="flex gap-6">
              {habitColors.map((color) => (
                <button
                  onClick={() => {
                    setHabit((prev) => ({
                      ...prev,
                      color,
                    }));
                    setErrors((prev) => {
                      const nextErrors = { ...prev };
                      delete nextErrors.color;
                      return nextErrors;
                    });
                  }}
                  key={color}
                  style={{
                    backgroundColor: color,
                    outlineStyle: "solid",
                    outlineColor: color,
                    outlineWidth: "1px",
                    outlineOffset: "1px",
                  }}
                  className={clsx(
                    "w-8 h-8 rounded-full shadow-lg border-4 ",
                    habit.color === color ? "border-black" : "border-gray-200",
                  )}
                ></button>
              ))}
            </div>
            {errors.color && (
              <p className="absolute text-red-500 text-sm mt-2">
                {errors.color}
              </p>
            )}
          </div>
          <div className="bg-[#fdf1e5] rounded-lg p-2">
            <p className="text-[#cb5b42]">Tip</p>
            <p className="text-[#a97c5e] text-sm">
              Small habits today,big changes tomorrow.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              onClick={addHabit}
              className="bg-[#d65b43] rounded-md w-98 text-white py-2"
            >
              {editedHabit === null ? "Add Habit" : "Edit Habit"}
            </button>
            <button
              onClick={() => setAddHabit((prev) => !prev)}
              className="bg-[#fdf8f4] rounded-md w-98 text-[#a1785d] border border-[#a1785d] py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
