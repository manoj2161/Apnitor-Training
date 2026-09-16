import MovieCard from "./MovieCard"
function MovieList(){
    return (<>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"ceter",alignContent:"center",gap:"10px"}}>

    <MovieCard title="Iron man" genre="Sci-Fi" isAvailable={true} rating={5} cast={["Rdj","Chris","Steve","Peter","Tony"]}>
<div style={{backgroundColor:"gray"}}>
    Showtimes : 09:45PM Date : 03/08/2026
</div>
    </MovieCard>
    <MovieCard title="Spider Man" genre="Sci-Fi" isAvailable={false} rating={4} cast={["Natasha","May","Ruffelo","Peter","Zendya"]}>
    </MovieCard>
    <MovieCard title="Captain America" genre="Action" isAvailable={true} rating={5} cast={["Hemsworth","Chris","Steve","Peter","Tony"]}>
<div style={{backgroundColor:"gray"}}>
    Showtimes : 09:45PM Date : 03/08/2026
</div>
    </MovieCard>
    <MovieCard title="KGF" genre="Action" isAvailable={false} cast={["Sai Pallavi","Ram Charan","Allu Arjun","Prabhas","Yash"]}>
    </MovieCard>
    </div>
    </>)
}

export default MovieList