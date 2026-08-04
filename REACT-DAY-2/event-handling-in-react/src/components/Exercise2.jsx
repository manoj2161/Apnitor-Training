function Exercise2(){
  const products = ["Pen", "Notebook", "Eraser"];
function handleClick(name){
  alert(name);
}
    return(<> 

{
    products.map((product)=>
    <button key={product} onClick={()=>{
      handleClick(product)
    }}>{product}</button>
    )}
    </>)
}

export default Exercise2