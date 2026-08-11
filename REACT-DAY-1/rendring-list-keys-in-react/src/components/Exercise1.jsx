function Exercise1(){
     const fruits = ["Apple","Banana","Licthi","Grapes"];
    return (<>
      List of Fruits
     <ul>
      {
        fruits.map((fruit,index)=>{
         return <li key={index}>{fruit}</li>
        })
      }
     </ul>
    </>)
}
export default Exercise1