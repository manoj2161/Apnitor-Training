import { useCart } from "./CartContext";
export const CartIcon = () => {
  const { quantity, setVisible, visible } = useCart();
  return (
    <>
      <div className="flex gap-1">
        <span>{quantity}</span>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <img
            className="w-6"
            src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png"
            alt=""
          />
        </button>
      </div>
    </>
  );
};
