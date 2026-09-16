import { Clapperboard } from 'lucide-react';
import { SquarePause } from 'lucide-react';
import { Star } from 'lucide-react';

function MovieCard({title,genre,isAvailable,rating="No Rated",cast,children}){
    return (<>
    <div style={{border:"2px solid black", width:"300px", padding:"10px",backgroundColor:"#f0f0f0"}}>
        <h1>Title : {title}</h1>
        <p>Genre : {genre}</p>
        <p>Availability : {isAvailable?<span><Clapperboard/> Now Showing</span>:<span><SquarePause/> Not Available</span>}</p>
        <p>Reating : {rating} <Star color="#eee03f" /></p>
        <p>Cast : {cast.map((actors)=>{
            return actors
        }).join(",")}</p>
        {children}
    </div>
    <br />
    </>)
}

export default MovieCard