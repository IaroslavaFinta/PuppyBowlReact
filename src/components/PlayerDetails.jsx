import { useEffect, useState } from "react";
import { getPlayer } from "../api";
import { useParams } from "react-router-dom";

export default function PlayerDetails() {
  const [player, setPlayer] = useState({});

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    getPlayer(id).then((player) => {
      console.log(player);
      setPlayer(player);
    });
  }, []);

  return (
    <>
      <div>
        <h1>{player.name}</h1>
      </div>
    </>
  );
}
