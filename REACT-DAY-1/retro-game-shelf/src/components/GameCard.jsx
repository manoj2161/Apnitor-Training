import { SquareCheck } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';

function GameCard({title,platform,completion,genres}){
    return(<>
<div style={{width:"300px", border:"2px solid black",margin:"10px",padding:"10px"}}>
<p>Title : {title}</p>
<p>Platform : {platform}</p>
<p>Completion Status : {completion?<span><SquareCheck size={16} color="#00eb04" /> Completed</span>:<span><Gamepad2 size={16} color="#404a40" /> In Progress</span>}</p>
<p>Genres : {genres}</p>
    </div>
    </>)
}

export default GameCard