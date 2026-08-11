function Exercise5(){
// const arr=[1,2];
const arr=[];
    return (<>
    <h3>Empty state handling</h3>
    {
 <p>{arr.length===0?<span>No new notifications</span>:<span>{
    arr.map((num)=>{
        return <li>{num}</li>
    })}</span>}</p>}
    </>)
}

export default Exercise5