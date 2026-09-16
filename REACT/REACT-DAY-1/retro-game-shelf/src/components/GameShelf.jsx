function GameShelf({games}){
    return (<>
    <h1>COUNT</h1>
{
<p>
    <span>{games.length} Out of </span>  
<span>{ 
    games.filter((game)=>
        game.completed===true
    ).map((game)=>game.title).length
    }</span> Games Completed</p>
}
{games.length===0?null:
<h1>GAME SHELF</h1>}
        {
            games.map((game)=>
                    <div style={{display:"inline-block",grid:"", border:"2px solid black",margin:"5px",padding:"10px",width:"200px",backgroundColor:"#f0f0f0"}} key={game.id}>
                    <p>ID : {game.id}</p>
                    <p>TITLE : {game.title}</p>
                    <p>PLATFORM : {game.platform}</p>
                    <p>STATUS : {game.completed?<span>Completed</span>:<span>In progress</span>}</p>
                    <p>GENRE : {game.genres.map((genre)=>genre).join(",")}</p>
                    </div>
            )
}
    </>)
}

export default GameShelf