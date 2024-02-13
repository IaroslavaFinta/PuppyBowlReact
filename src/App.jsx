import { useEffect, useState } from 'react'
import './App.css'
import { getPlayers, createPlayer,<q></q>  } from "./api"

function App() {
  
  //fetch all players
  useEffect(() => {
    getPlayers().then((players) =>
      console.log(players))
  }, []);

  //for create a new player
  // useEffect(() => {
  //   createPlayer({

  //   }).then(newPlayer => {
  //     console.log(newPlayer)
  //   })
  // }, []);

  return (
    <div>
      Hello
    </div>
    )
}

export default App
