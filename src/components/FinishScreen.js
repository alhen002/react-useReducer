function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;

  if (percentage === 100) {
    emoji = "🥳";
  }
  if (percentage >= 80 && percentage < 100) {
    emoji = "😎";
  }
  if (percentage >= 50 && percentage < 80) {
    emoji = "🙂";
  }
  if (percentage >= 0 && percentage < 50) {
    emoji = "😐";
  }
  if (percentage === 0) {
    emoji = "😢";
  }

  return (
    <>
      <p className="result">
        <span role="img" aria-label="emoji">
          {emoji}
        </span>
        You scored <strong>{points}</strong> out of <strong>{maxPoints}</strong>{" "}
        points! ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Play again
      </button>
    </>
  );
}

export default FinishScreen;
