import girlImage from "../assets/girlImage.png";
export const NoHabbit = ({ addHabit }) => {
  return (
    <>
      <div className="mt-4 border-gray-200 border flex justify-center items-center mx-2 shadow-md rounded-md bg-[#fdf9f3] gap-12">
        <div>
          <img src={girlImage} alt="" className="w-48" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-bold">No habits yet!</h1>
            <p className="text-sm mt-2">
              Add your first habit and <br />
              start your self love journey
            </p>
          </div>
          <div>
            <button
              onClick={() => addHabit((prev) => !prev)}
              className="bg-[#dd4b25] p-2 rounded-md text-white text-sm shadow-md"
            >
              + Add Habbit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
