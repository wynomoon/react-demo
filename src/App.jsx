import "./App.less";

import React, { useEffect, useState } from "react";

import { Button } from "antd";
import Nav from "@/components/Nav";

function App() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });
  return (
    <div className="App">
      <Nav />
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>加一</Button>
      <br />
      <Button onClick={() => setCount((count = 0))}>清空</Button>
    </div>
  );
}

export default App;
