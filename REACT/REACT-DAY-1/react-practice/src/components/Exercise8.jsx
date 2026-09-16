function Exercise8(){
const name = "Rahul Sharma"; 
const age = 24; 
const bio = "Frontend developer learning React"; 
const isOnline = true; 

return( <>
<h1>Static Profile Card</h1>
    <p style={{color:"blue",fontWeight:"bold"}}>Name : {`${name}`}</p>
    <p>Age : {`${age}`}</p>   
    <p>Bio : {`${bio}`}</p>   
    <p>
        {/* This will show the status of the user */}
    Status : {isOnline? <span style={{color:"green"}}>ONLINE</span>: <span style={{color:"red"}}>OFFLINE</span>}
</p>
</>)
}
export default Exercise8