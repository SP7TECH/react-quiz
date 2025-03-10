export default function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (points === 100) emoji = "🥇";
  if (points >= 80 && points < 100) emoji = "🎉";
  if (points >= 50 && points < 80) emoji = "😁";
  if (points >= 0 && points < 50) emoji = "🤨";
  if (points === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} points ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}
