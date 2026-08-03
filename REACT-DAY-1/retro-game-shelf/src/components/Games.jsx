import GameCard from "./GameCard"
import GameShelf from "./GameShelf"
function Games(){
const games = [ 
{ 
id: "g1", title: "Chrono Trigger", platform: "SNES", completed: true, 
genres: [
"RPG", "Adventure"
] 
},
 { 
id: "g2", title: "Contra", platform: "NES", completed: false,
 genres: [
"Action", "Shooter"
] 
}, 
{
 id: "g3", title: "Metal Slug", platform: "Arcade", completed: true, 
genres: [
"Action", "Platformer"
] 
}, 
{
 id: "g4", title: "Tetris", platform: "Game Boy", completed: false, 
genres: [
"Puzzle"]
}]
    return (<>
    <GameShelf games={games}></GameShelf>
{
games.map((game)=>
<GameCard title={game.title} platform={game.platform} completion={game.completed} genres={game.genres.map((genre)=>{
    return genre
}).join(",")} ></GameCard>
    )
}
    </>)
}

export default Games