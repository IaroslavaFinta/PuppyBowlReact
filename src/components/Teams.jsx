import { useEffect, useState } from "react";
import { getTeams } from "../api";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((teams) => {
      setTeams(teams);
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Players</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => {
            return (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.score}</td>
                <td>
                  {team.players.map((teamA) => {
                    return (
                      <tr key={team.id}>
                      <td>{teamA.name}</td>
                      </tr>
                    )
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
