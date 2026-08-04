function Exercise3(){
    
    return(<> 
<input type="text" name="name" id="name" onChange={(e)=>
  console.log(e.target.value)
}/>
    </>)
}

export default Exercise3