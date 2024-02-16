import { useEffect, useState } from "react";
import { getPlayer } from "../api";
import { useParams, useNavigate } from "react-router-dom";

export default function PlayerDetails() {
  const [player, setPlayer] = useState({});

  const navigate = useNavigate();

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
        <h2>{player.breed}</h2>
        <h2>{player.teamId}</h2>
        <button
            onClick={() => navigate(-1)}
        >Go Back</button> 
      </div>
    </>
  );
}
