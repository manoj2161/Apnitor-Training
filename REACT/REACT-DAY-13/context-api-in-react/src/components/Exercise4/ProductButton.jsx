import { useCart } from "./CartContext";

export const ProductButton = ({ product }) => {
  const { addItem } = useCart();
  return (
    <>
      <button
        className="shadow-2xl bg-blue-400 text-white text-sm rounded-lg lg:p-2 p-1 hover:bg-blue-500"
        onClick={() => {
          addItem(product.id);
        }}
      >
        Add to cart
      </button>
    </>
  );
};
