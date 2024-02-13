import { useEffect, useState } from 'react'
import './App.css'
import { getPlayers, getPlayer, createPlayer, deletePlayer, getTeams } from "./api"
import Player from './components/Player';

function App() {
  
  const [players, setPlayers] = useState([]);
  const [newplayer, setNewPlayer] = useState({});

  useEffect(() => {
    getPlayers().then(players => {
      setPlayers(players);
    });
  }, []);

  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer)
}

function handleDeletePlayerClick(playerId) {
  deletePlayer(playerId).then(() => {
    getPlayers().then(players => {
      setPlayers(players)
    })
  })
}
  
  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const newPlayer = Object.fromEntries(formData.entries());
    createPlayer(formData).then(() => {
      getPlayers().then((players) => {
        setPlayers(players)
      });
    });
  }

  return (
    <>
      <h1>Puppy Bowl</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="breed">Breed</label>
        <input type="text" name="breed" />
        <button>Submit</button>
      </form>
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
              <Player
                key={player.id}
                player={player}
                onClick={handlePlayerClick}
                onClick={handleDeletePlayerClick}
              />
            );
          })}
        </tbody>
      </table>
    </>
    )
}

export default App
