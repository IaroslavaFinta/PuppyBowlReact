import { useEffect, useState, useParams } from "react";
import { getPlayer } from "../api";

export default function PlayerDetails() {
  const [player, setPlayer] = useState();

  let { id } = useParams();

  useEffect(() => {
    getPlayer(id).then((player) => {
      setPlayer(player);
    });
  }, []);

  return (
    <>
      {player.map((single) => {
        return (
          <ul key={single.id}>
            <li>{single.name}</li>
            <li>{single.breed}</li>
            <li>{single.status}</li>
            <li>{single.imageUrl}</li>
            <li>{single.createdAt}</li>
            <li>{single.teamId}</li>
            <li>{single.cohortId}</li>
          </ul>
        );
      })}
      ;
    </>
  );
}
