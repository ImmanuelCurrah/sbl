import TeamScores from "../teamScores/TeamScores";

export default function AllScores(props) {
  const { scores } = props;

  return (
    <div>
      {scores?.map((teams, index) => {
        return <TeamScores key={index} teams={teams} />;
      })}
    </div>
  );
}
