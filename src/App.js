import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <button
          data-testid="minus-button"
          onClick={() => setCounter((prev) => prev - 1)}
          disabled={disabled}
        >
          -
        </button>

        {/* prev 의 경우 이전 상태 값에 대한 참조로, 현재 카운터 값 */}
        <button
          data-testid="plus-button"
          onClick={() => setCounter((prev) => prev + 1)}
          disabled={disabled}
        >
          +
        </button>

        <button 
        style={{ backgroundColor: "blue" }} 
        data-testid="on/off-button"
        onClick={() => {setDisabled(prev => !prev)}}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
