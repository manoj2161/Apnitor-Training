import { Pencil, Trash2, GripVertical } from "lucide-react";
import { NoHabbit } from "./NoHabbit";
const checkbox =
  "h-4 w-4 appearance-none rounded-full border-2 border-orange-300 checked:bg-orange-300";
export const Habbits = ({ addHabit }) => {
  const habbits = [
    {
      id: "h1",
      ownerId: "u1",
      name: "Drink Water",
      color: "#4ade80",
      completedDated: ["2026-08-31", "2026-08-30"],
    },
    {
      id: "h2",
      ownerId: "u2",
      name: "Study",
      color: "#4f23c7",
      completedDated: ["2026-08-31", "2026-08-30"],
    },
    {
      id: "h3",
      ownerId: "u3",
      name: "Playing games",
      color: "#eb720f",
      completedDated: ["2026-08-31", "2026-08-30"],
    },
  ];
  return (
    <>
      <div>
        <div className="border-gray-200 border p-4 rounded-lg shadow-lg mx-2">
          <div>
            <h2 className="text-xl font-bold pl-2">My Habbits</h2>
          </div>
          <div>
            {habbits.map((habbit) => (
              <div
                key={habbit.id}
                className="flex gap-2 py-2 justify-between items-center"
              >
                <GripVertical className="w-5 text-gray-600" />
                <p
                  className="w-8 h-5 rounded-full ml-2"
                  style={{ backgroundColor: habbit.color }}
                ></p>
                <p className="w-28">{habbit.name}</p>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <input type="checkbox" name="" id="" className={checkbox} />
                    <span className="text-sm font-semibold">Mon</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <input type="checkbox" name="" id="" className={checkbox} />
                    <span className="text-sm font-semibold">Tue</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <input type="checkbox" name="" id="" className={checkbox} />
                    <span className="text-sm font-semibold">Wed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <input type="checkbox" name="" id="" className={checkbox} />
                    <span className="text-sm font-semibold">Thu</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <input type="checkbox" name="" id="" className={checkbox} />
                    <span className="text-sm font-semibold">Fri</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <input type="checkbox" name="" id="" className={checkbox} />
                    <span className="text-sm font-semibold">Sat</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <input type="checkbox" name="" id="" className={checkbox} />
                    <span className="text-sm font-semibold">Sun</span>
                  </div>
                </div>
                <button>
                  <Pencil className="w-5 text-gray-700 mb-2" />
                </button>
                <button>
                  <Trash2 className="w-5 mb-2 text-red-500" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {habbits.length === 0 && (
          <div>
            <NoHabbit addHabit={addHabit} />
          </div>
        )}
      </div>
    </>
  );
};
