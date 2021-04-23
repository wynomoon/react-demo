import "./about.less";

import React, { useState } from "react";

import { Button } from "antd";

function About() {
  let [count, setCount] = useState(0);

  return (
    <>
      <h2>About sss</h2>
      <p>You clicked {count} times</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        加一
      </Button>
      <br />
      <Button onClick={() => setCount((count = 0))}>清空</Button>
    </>
  );
}
export default About;
