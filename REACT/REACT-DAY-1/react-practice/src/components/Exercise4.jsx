function Exercise4(){
     return(
      <>
      <div style={{color: "red",fontSize:"20px"}}>
      {/*-- this is a heading */}
      <h1 onClick={
        ()=>{
          alert("Hi")
        }
      }>Click me</h1>
      <input type="checkbox" checked={true} disabled={false}/>
    </div>
      </>
     )
}
export default Exercise4