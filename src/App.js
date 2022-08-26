import { useState, useEffect } from "react";
import AllScores from "./components/scores/AllScores";
import SearchFilter from "./components/searchFilters/SearchFilter";
import { getAllScores } from "./routes/scoreRoutes";

function App() {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      const allScores = await getAllScores();
      setScores(allScores);
    };
    fetchScores();
  }, []);

  return (
    <div className="flex flex-col items-center bg-slate-800">
      <SearchFilter setScores={setScores} />
      <AllScores scores={scores} />
    </div>
  );
}

export default App;
