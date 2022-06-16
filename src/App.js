/** @format */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

import "./App.css";
import { Card } from "./components/Card/Card";

// Modal.setAppElement("#root");

Modal.setAppElement("#root");

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts`
      )
      .then((res) => {
        const data = res.data;

        setData(data);
      });
  }, []);

  console.log(data);
  return (
    <div className='App'>
      <div className='grid_container'>
        {data &&
          data.map((item) => (
            <Card
              key={item.id}
              image={item.thumbnail.small}
              title={item.title}
              content={item.content}
              avatar={item.author.avatar}
              name={item.author.name}
              role={item.author.role}
              date={item.date}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
