import { ChronoHorizontal, ChronoVertical } from "./components/ChronoProvider";

function App() {
  return (
    <>
      <h1>Modern Timeline with React-Chrono</h1>
      <div>
        <h3>Horizontal</h3>
        <ChronoHorizontal />
      </div>
      <div>
        <h3>Vertical</h3>
        <ChronoVertical />
      </div>
    </>
  );
}

export default App;
