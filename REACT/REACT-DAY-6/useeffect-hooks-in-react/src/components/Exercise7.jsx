
function Exercise7({items}) {
     
  const total = items.reduce((sum, item) => sum + item.price, 0)
  return (
    <>
      <p>Total: ₹{total}</p>;
    </>
  );
}

export default Exercise7;