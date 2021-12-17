import { useCallback, useEffect, useState } from "react";
import "./App.css";
import App2 from "./App2";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((p) => p + 1);
  }

  useEffect(() => {
    setTimeout(() => console.log(`You clicked ${count} times`), 3000);
  });

  const handleAlertClick = useCallback(() => {
    setTimeout(() => alert(count), 3000);
  }, [count]);

  return (
    <div className="App">
      <p>Count {count}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
      <App2 />
    </div>
  );
}

export default App;
