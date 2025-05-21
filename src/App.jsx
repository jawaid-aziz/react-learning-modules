import { useState } from "react";
import "./App.css";

function App() {
  const items = ['item1', 'item2', 'item3', 'item4'];
  return (
    <>
    <div>
      <ol>
        {items.map(item => {
          return <li>{item}</li>
        })}
      </ol>
    </div>
    </>
  );
}

export default App;
