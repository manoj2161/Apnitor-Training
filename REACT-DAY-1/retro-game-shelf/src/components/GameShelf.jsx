function GameShelf({games}){

    return (<>

        {
            games.map((game)=>
                    <div style={{display:"flex", flexWrap:"wrap",border:"2px solid black",margin:"5px",padding:"10px"}}>
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