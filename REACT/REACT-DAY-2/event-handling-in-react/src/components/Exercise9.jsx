function Exercise9(){
function reusableHandler(e){
const {name,value}=e.target;
console.log(`${name} ${value}`);
}
  return (<>
  <input type="text" name="name" id="" onChange={reusableHandler}/>
  <input type="email" name="email" id="" onChange={reusableHandler}/>
  <input type="number" name="phone" id="" onChange={reusableHandler}/>
  </>)

}

export default Exercise9