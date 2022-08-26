import React from "react";

export default function ScoreCard(props) {
  const { sport, teams, status_id } = props;

  let gameStatus = "";

  if (status_id === 1) {
    gameStatus = "Upcoming";
  }

  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-96 m-4">
      <div className="flex flex-row justify-between">
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {sport}
        </p>
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {gameStatus}
        </p>
      </div>
      <div className="flex justify-around w-full">
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-96 m-4 font-normal text-gray-700 dark:text-gray-400">
          <div>{teams[0].team.name}</div>
          <div>score: {teams[0].score}</div>
          <div>home: {teams[0].home.toString()}</div>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-96 m-4 font-normal text-gray-700 dark:text-gray-400">
          <div>{teams[1].team.name}</div>
          <div>score: {teams[1].score}</div>
          <div>home: {teams[1].home.toString()}</div>
        </div>
      </div>
    </div>
  );
}
