import { useEffect, useState } from 'react'
import './App.css'
import { getPlayers, getPlayer, createPlayer, deletePlayer, getTeams } from "./api"

function App() {
  
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    getPlayers().then(players => {
      setPlayers(players);
    });
  }, []);

  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer)
}


  return (
    <>
      <h1>Puppy Bowl</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Breed</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          {players.map(player => {
            return (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.breed}</td>
                <td>{player.status}</td>
                <td>
                  <button onClick={handlePlayerClick(player.id)}>View Player</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
    )
}

export default App
