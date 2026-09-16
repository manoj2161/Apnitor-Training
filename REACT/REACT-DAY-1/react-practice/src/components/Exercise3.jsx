function Exercise3(){
     const price = 100; 
  const quantity = 3; 
  const freeDelivery = true;
return( <>
<p>Price: {price}</p>
 <p>Total : {price*quantity}</p>
 <p>Delivery : {freeDelivery?<span>Free Delivery</span> : <span>Delivery Charge applies</span>}</p>
<p>{`3 items at rs${price} each = rs${3*price}`}</p>
</>)
}
export default Exercise3