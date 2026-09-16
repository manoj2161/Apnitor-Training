function Exercise5(){
function handleSubmit(e){
e.preventDefault();
console.log(e.target.elements.name.value);
console.log("form submitted");
}
    return(<> 
<form action="" onSubmit={handleSubmit}>
    <input type="text" name="name" id="name"/>
    <button type="submit">Submit</button>
</form>
    </>)
}

export default Exercise5