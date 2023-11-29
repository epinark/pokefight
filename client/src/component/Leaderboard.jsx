import { useState, useEffect } from "react";
import { getLeaderboard } from "./api";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const data = await getLeaderboard();
      setLeaderboard(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-gray-600 to-gray-300 flex flex-col items-center pt-4 grow">
      <h1 className="text-center text-white text-4xl font-bold py-4">
        Leaderboard
      </h1>
      <ul>
        {leaderboard.map((game, index) => (
          <li
            key={index}
            className="px-2 py-1 rounded-lg text-white bg-gray-400 flex m-1 font-bold"
          >
            Game {index + 1}: &nbsp;{" "}
            <span className="text-green-800 font-bold">{game.winner}</span>
            &nbsp;VS&nbsp;
            <span className="text-red-600 font-bold">{game.looser}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
