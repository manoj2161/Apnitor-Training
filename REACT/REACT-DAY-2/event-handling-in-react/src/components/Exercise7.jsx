function Exercise7(){
    return(<> 
<div onMouseEnter={()=>{
     console.log("Watching...");
}} onMouseLeave={()=>{
    console.log("Left");
}}>This is a div
</div>
    </>)
}

export default Exercise7