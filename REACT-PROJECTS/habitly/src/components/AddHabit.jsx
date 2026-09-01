import girlImage from "../assets/girlImage.png";
import { Pen, X } from "lucide-react";
export const AddHabit = ({ setAddHabit }) => {
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
            <label htmlFor="habit" className="font-semibold">
              Habit Name
            </label>
            <Pen className="absolute left-2 top-9 w-5 text-[#a97c5e]" />
            <input
              type="text"
              name=""
              id=""
              className="border border-[#a97c5e] rounded-md w-98 h-8 pl-8 focus:outline-none"
              placeholder="eg. Drink water"
            />
          </div>
          <div>
            <p className="font-semibold mb-4">Choose a color</p>
            <div className="flex gap-6">
              {habitColors.map((color) => (
                <div
                  key={color}
                  style={{
                    backgroundColor: color,
                    outlineStyle: "solid",
                    outlineColor: color,
                    outlineWidth: "1px",
                    outlineOffset: "1px",
                  }}
                  className="w-8 h-8 rounded-full shadow-lg border-4 border-gray-200"
                ></div>
              ))}
            </div>
          </div>
          <div className="bg-[#fdf1e5] rounded-lg p-2">
            <p className="text-[#cb5b42]">Tip</p>
            <p className="text-[#a97c5e] text-sm">
              Small habits today,big changes tomorrow.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <button className="bg-[#d65b43] rounded-md w-98 text-white py-2">
              Add Habit
            </button>
            <button className="bg-[#fdf8f4] rounded-md w-98 text-[#a1785d] border border-[#a1785d] py-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
