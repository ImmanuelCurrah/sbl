import { useState } from "react";
import { filterDate } from "../../routes/scoreRoutes";

export default function SearchFilter(props) {
  const { setScores } = props;
  const [filteredDate, setFilteredDate] = useState();

  const getGames = async (date) => {
    const scores = await filterDate(date);
    setScores(scores);
  };

  return (
    <>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-4"
        type="date"
        onChange={(e) => setFilteredDate(e.target.value)}
      />
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
        onClick={() => {
          getGames(`/games?date=${filteredDate}&priority_order=true`);
        }}
      >
        Search
      </button>
    </>
  );
}
