import GameCard from "./GameCard"
import GameShelf from "./GameShelf"
import Action from "./Action"
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
    <h1>Game Card</h1>
{games.length===0?<h1>No Games Available</h1>:
games.map((game)=>
<GameCard title={game.title} platform={game.platform} completion={game.completed} genres={game.genres.map((genre)=>{
    return genre
}).join(",")} ></GameCard>
    )
}
<Action games={games}></Action>
    </>)
}

export default Games