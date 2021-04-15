import "./App.css";

import React, { useEffect, useState } from "react";

import { Button } from "antd";

// import Nav from "./components/Nav/Nav";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count1} times`;
  });
  return (
    <div className="App">
      {/* <Nav /> */}
      <p>You clicked {count} times</p>
      <p>You clicked {count1} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <br />
      <Button onClick={() => setCount1(count1 + 1)}>Click me</Button>
    </div>
  );
}

export default App;
