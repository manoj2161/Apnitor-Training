function Exercise4(){
    
    return(<> 
<input type="checkbox" name="check" id="check" onChange={(e)=>
  console.log(e.target.checked)
}/>
    </>)
}

export default Exercise4