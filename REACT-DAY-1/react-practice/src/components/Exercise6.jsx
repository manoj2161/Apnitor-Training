function Exercise6(){
const isPaid = false;
return( <>
<p>Status : {isPaid?<span style={{color:"green",fontWeight:"bold"}}>Paid</span>:<span style={{color:"red"}}>Pending</span>}</p>
</>)
}
export default Exercise6