export const ButtonGroup = () => {
  const buttonStyling = "p-2 rounded-lg text-white font-bold shadow-xl";
  return (
    <>
      <div className="flex gap-8 m-4">
        <button className={`${buttonStyling} bg-green-500 hover:bg-green-800`}>
          Save
        </button>
        <button className={`${buttonStyling} bg-gray-500 hover:bg-gray-800`}>
          Edit
        </button>
        <button className={`${buttonStyling} bg-red-500 hover:bg-red-800`}>
          Delete
        </button>
      </div>
    </>
  );
};
