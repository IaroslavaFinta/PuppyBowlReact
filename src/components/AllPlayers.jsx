import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPlayers, getPlayer, createPlayer, deletePlayer } from "../api";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);

  function handleDeletePlayerClick(playerId) {
    deletePlayer(playerId).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    // Object.fromEntries - built-in object which is used to transform a list of key-value pairs into an object
    const newPlayer = Object.fromEntries(formData.entries());
    createPlayer(newPlayer).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }

  const [searchInput, setSearchInput] = useState("");

  // a handler function that will read changes in the search bar
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="formSection" />
        <label htmlFor="breed">Breed</label>
        <input type="text" name="breed" className="formSection" />
        <button>Submit</button>
      </form>
      {/* input of type search inside the return statement */}
      <div className="search-bar">
        <div className="input-wrapper">
          <input
            className="search-input"
            type="search"
            placeholder="Type to search for a puppy"
            value={searchInput}
            onChange={handleChange}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.filter((player)=>player.name.match(searchInput)).map((player) => {
            return (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.breed}</td>
                <td>{player.status}</td>
                <td>
                  {/* Anything with a colon in front of it gets turned into params. */}
                  <button onClick={() => navigate(`/players/${player.id}`)}>
                    View Player
                  </button>
                  <button onClick={() => handleDeletePlayerClick(player.id)}>
                    Delete Player
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
