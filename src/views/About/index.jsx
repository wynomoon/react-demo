import "./about.less";

import React, { useEffect, useState } from "react";

import { Button } from "antd";
import axios from "axios";

function About() {
  let [count, setCount] = useState(0);
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="about">
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
      <ol>
        {data.hits.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default About;
