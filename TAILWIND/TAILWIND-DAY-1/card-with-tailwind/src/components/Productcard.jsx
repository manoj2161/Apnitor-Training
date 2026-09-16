export const Productcard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-300 p-6 rounded-3xl    shadow-xl">
          <p className="text-xl font-bold text-blue-500">Product 1</p>
          <p className="text-sm text-orange-600">Price : $100</p>
        </div>
        <div className="bg-gray-300 p-6   rounded-3xl    shadow-xl">
          <p className="text-xl font-bold text-blue-500">Product 2</p>
          <p className="text-sm text-orange-600">Price : $200</p>
        </div>
        <div className="bg-gray-300 p-6   rounded-3xl    shadow-xl">
          <p className="text-xl font-bold text-blue-500">Product 3</p>
          <p className="text-sm text-orange-600">Price : $300</p>
        </div>
        <div className="bg-gray-300 p-6   rounded-3xl    shadow-xl">
          <p className="text-xl font-bold text-blue-500">Product 4</p>
          <p className="text-sm text-orange-600">Price : $400</p>
        </div>
        <div className="bg-gray-300 p-6   rounded-3xl    shadow-xl">
          <p className="text-xl font-bold text-blue-500">Product 5</p>
          <p className="text-sm text-orange-600">Price : $500</p>
        </div>
        <div className="bg-gray-300 p-6   rounded-3xl    shadow-xl">
          <p className="text-xl font-bold text-blue-500">Product 6</p>
          <p className="text-sm text-orange-600">Price : $600</p>
        </div>
      </div>
    </>
  );
};
