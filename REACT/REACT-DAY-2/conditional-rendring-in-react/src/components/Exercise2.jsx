function CartBadge({itemCount}){
  return (
    <div>
      {itemCount>0 && <span className="badge">{itemCount}</span>}
    </div>
  );
}
export default CartBadge