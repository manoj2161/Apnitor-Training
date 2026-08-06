import { useState } from "react";
import "./Players.css";
function Players() {
  // const [score,setScore]=useState(0)
  const [players, setPlayers] = useState([
    { id: 1, name: "Manu", score: 0 },
    { id: 2, name: "Karan", score: 0 },
    { id: 3, name: "Aman", score: 0 }, ]);
  const [name, setName] = useState("");
  function handleUser() {
    if (name.trim() === "") return;
    let newId = players.reduce((acc, curr) => {
      if (acc > curr.id) {
        return acc;
      } else {
        return curr.id;
      }
    }, 0);
    let highestId = newId + 1;
    let score = 0;
    setPlayers((prev) => [...prev, { id: highestId, name, score }]);
    setName("");
  }


  function handleScoreInc(id) {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === id ? { ...player, score: player.score + 1 } : player,
      ),
    );
  }

  function handleScoreDec(id) {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === id ? { ...player, score: player.score - 1 } : player,
      ),
    );
  }
const highestScore = Math.max(...players.map((player)=>player.score))
  function handleReset() {
    setPlayers((prev) =>
      prev.map((player) => ({
        ...player,
        score: 0,
      })),
    );
}
  return (
    <>
      <div>
        <h2>Derived Leader</h2>
        {players
          .filter((player) => player.score === highestScore)
          .map((player) => {
            return <p key={player.id}>Name : {player.name} Score : {player.score}</p>;
          })}
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
          {players.map((player) => {
            return (
              <tbody key={player.id}>
                <tr>
                  <td>{player.id}</td>
                  <td>{player.name}</td>
                  <td>{player.score}</td>
                  {console.log("Player's score", player.name, player.score)}
                  <td>
                    <button onClick={() => handleScoreInc(player.id)}>
                      +1
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleScoreDec(player.id)}>
                      -1
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <button onClick={handleReset}>Reset Score</button>
        <p>
          Total Score :{" "}
          {players.reduce((acc, curr) => {
            return acc + curr.score;
          }, 0)}
        </p>
      </div>
      <div>
        <h1>Add Player</h1>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit" onClick={handleUser}>
          Add Player
        </button>
      </div>
    </>
  );
}
export default Players;
