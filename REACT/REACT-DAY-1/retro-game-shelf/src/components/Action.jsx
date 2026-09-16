function Action({games}){

    return (<>
    <h1>Action Games</h1>
    {
        <div>
            {
               games.filter((game)=>game.genres.includes("Action")).map((game)=>{
               return <>
               <div style={{border:"2px solid black", padding:"10px",margin:"5px"}}>
               <p>ID : {game.id}</p>
               <p>TITLE : {game.title}</p>
               <p>PLATFORM : {game.platform}</p>
               <p>GENRES : {game.genres[0]}</p>
               </div>
               </>
               })
            }
        </div>
    }
    </>)
}
export default Action