import { useCart } from "./Exercise4/CartContext";
import { Footer } from "./Exercise4/Footer";
import { Header } from "./Exercise4/Header";
import { ProductButton } from "./Exercise4/ProductButton";

export const ProductPage = ({ products }) => {
  const { items, removeItem, visible, setVisible } = useCart();
  return (
    <>
      <Header />
      {!visible && (
        <section className="grid place-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-gray-100">
          {products.map((product) => (
            <div
              key={product.id}
              className="lg:w-86 w-56 shadow-2xl mx-16 my-8 rounded-lg bg-white"
            >
              <div>
                <img
                  className="w-66 p-8"
                  src={product.img}
                  alt={`${product.name}`}
                />
              </div>
              <div className="mx-4 my-4 flex justify-between items-center font-semibold">
                <div>
                  <p>{product.name}</p>
                  <p>From : ${product.price}</p>
                </div>
                <div>
                  <ProductButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
      {visible && (
        <section className="absolute h-screen top-18 left-[5%] right-[5%] bg-white shadow-lg rounded-lg ">
          <h3 className="text-center text-3xl font-bold text-blue-400">Cart</h3>
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.name}
                className="m-8 flex justify-between items-center shadow p-4 rounded-lg shadow-gray-500"
              >
                <div>
                  <p className="font-bold text-xl">{item.name}</p>
                  <p className="font-bold text-md">Price : ${item.price}</p>
                  <p>Quantity : {item.units}</p>
                  <p className="font-bold text-xl">
                    Total Amount : ${item.price * item.units}
                  </p>
                </div>
                <div>
                  {item.units > 0 && (
                    <button
                      onClick={() => {
                        removeItem(item.id);
                      }}
                      className="shadow shadow-gray-400 p-2 text-sm bg-gray-200 rounded-lg hover:bg-black hover:text-white"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col">
              <p className="text-center m-8 text-xl font-semibold">
                Your Cart is Empty
              </p>
              <button
                className="self-center font-bold shadow-lg shadow-gray-500 p-2 bg-orange-400 text-white rounded-lg"
                onClick={() => setVisible(false)}
              >
                Continue Shopping
              </button>
            </div>
          )}

          <div className="text-center m-16 text-xl font-bold">
            Total Amount to pay : $
            {items.reduce((a, b) => {
              return a + b.price * b.units;
            }, 0)}
          </div>
        </section>
      )}
      {!visible && <Footer />}
    </>
  );
};
