function Exercise6(){
    return(<> 
<input type="text" name="name" id="name" onKeyDown={(e)=>{
if(e.key==="Enter"){
    e.preventDefault()
    console.log(e.target.value); 
}}}/>
    </>)
}

export default Exercise6