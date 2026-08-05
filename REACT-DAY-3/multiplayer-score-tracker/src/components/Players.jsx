import { useState } from "react";
import './Players.css'
function Players() {
    const [score,setScore]=useState(0)
    const [players,setPlayers]=useState([
        {id:1,name:"Manu",score},{id:2,name:"Karan",score},{id:3,name:"Aman",score}]);
    const [name,setName]=useState("")
function handleUser(){
if(name.trim()==="")return
let newId = players.reduce((acc,curr)=>{
    if(acc>curr.id){
       return acc;
    }
    else{
      return  curr.id;
    }
},0)
let highestId = newId+1
let score = 0
setPlayers((prev)=>[...prev,{id:highestId,name,score}])
setName("")
}
function handleScoreInc(myId){
   players.filter((player)=>{
        if(player.id===myId){
            setScore(player.score+=1)
        }})
        
}
  function handleScoreDec(myId){players.filter((player)=>{
        if(player.id===myId){
            if(player.score>0){
                setScore(player.score-=1)
            }
        }
    }) }

    function handleReset(){
        players.map((player)=>{
            return setScore(player.score=0)
        })
    }
let leader = players.reduce((acc,curr)=>{
    if(acc>curr.score){
        return acc
    }
    else{
        return curr.score
    }
})
  return (
    <>
    <div>
        <h2>Derived Leader</h2>
        {
            players.filter((player)=>{
                if(leader<player.score){
                    return console.log(player)
                }
            })
        }
    </div>
    <div className="scoreBoard">
<table className="scoreTable">
    <thead>
    <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>SCORE</th>
        <th>WIN</th>
        <th>LOOSE</th>
    </tr>
    </thead>
      {
          players.map((player)=>{
              return <tbody key={player.id}>
              <tr>
                    <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>{player.score}</td>
                    <td><button onClick={()=>handleScoreInc(player.id)}>+1</button></td>
                    <td><button onClick={()=>handleScoreDec(player.id)}>-1</button></td>
              </tr>
              </tbody> 
        })
    }
    </table>
    <button onClick={handleReset}>Reset Score</button>
    </div>
    <div>
        <h1>Add Player</h1>
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <button type="submit" onClick={handleUser}>Add Player</button>
    </div>
    </>
  );
}
export default Players;