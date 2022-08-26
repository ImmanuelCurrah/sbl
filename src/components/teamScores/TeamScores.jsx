import ScoreCard from "../../UI/ScoreCard";

export default function TeamScores(props) {
  const { teams } = props;

  let sport = "";

  if (teams.sport_id === 1) {
    sport = "BasketBall";
  } else if (teams.sport_id === 2) {
    sport = "Football";
  } else if (teams.sport_id === 3) {
    sport = "Baseball";
  } else if (teams.sport_id === 4) {
    sport = "Softball";
  } else if (teams.sport_id === 5) {
    sport = "Lacrosse";
  } else if (teams.sport_id === 6) {
    sport = "Soccer";
  } else if (teams.sport_id === 7) {
    sport = "Volleyball";
  } else if (teams.sport_id === 8) {
    sport = "Field Hockey";
  } else if (teams.sport_id === 9) {
    sport = "Ice Hockey";
  } else if (teams.sport_id === 10) {
    sport = "Water Polo";
  } else if (teams.sport_id === 11) {
    sport = "Cross Country";
  } else if (teams.sport_id === 12) {
    sport = "Golf";
  } else if (teams.sport_id === 13) {
    sport = "Tennis";
  }

  return (
    <div className="flex flex-col items-center">
      <ScoreCard
        sport={sport}
        teams={teams.game_teams}
        status_id={teams.status_id}
      />
    </div>
  );
}
