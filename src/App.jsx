import Header from "./Header";
import Quiz from "./Quiz";

function App() {
  return (
    <div className="app">
      <Header />

      <Quiz>
        <p>1/15</p>
        <p>Question</p>
      </Quiz>
    </div>
  );
}

export default App;
