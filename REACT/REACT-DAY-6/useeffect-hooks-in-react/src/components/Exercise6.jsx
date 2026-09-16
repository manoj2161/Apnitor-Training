import { useEffect, useState } from "react";

function Exercise6() {
const [count, setCount] = useState(0);
function handleCount(){
    setCount(count+1)
}
useEffect(() => {
}, [count]);
return (<>
<button onClick={handleCount}>Inc</button>
<p>{count}</p>
</>)

}

export default Exercise6;