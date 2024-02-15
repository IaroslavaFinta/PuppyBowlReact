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
                    <td>Name</td>
                    <td>Score</td>
                    <td>Players</td>
                </thead>
                <tbody>
                    {teams.map((team) => {
                        return (
                            <tr key={team.id}>
                                <td>{team.name}</td>
                                <td>{team.score}</td>
                                <ul>{team.players.name}</ul>
                                {console.log(team.players.name)}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}