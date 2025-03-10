export default function RestartTest({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart quiz
    </button>
  );
}
