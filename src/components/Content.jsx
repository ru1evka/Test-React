import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../sass/content.scss";

function Content({}) {
  const [resData, setResData] = useState([]);
  const [resDataText, setResDataText] = useState([]);
  const [resDataUsers, setResDataUsers] = useState([]);

  React.useEffect(() => {
    axios
      .all([
        axios.get(
          "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
        ),
        axios.get(
          "https://jsonplaceholder.typicode.com/users?_start=0&_limit=10"
        ),
        axios.get(
          "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
        ),
      ])
      .then(
        axios.spread((...res) => {
          setResData(res[0].data);
          setResDataText(res[2].data);
          setResDataUsers(res[1].data);

          // console.log(res[1].data, res[2].data);
        })
      );
  }, []);

  return (
    <div className="block">
      {Object.values(resData).map((arr1) => {
        return Object.values(resDataUsers).map((arr2) => {
          return Object.values(resDataText).map((arr3) => (
            <div className="wrapperContent">
              <div className="flexElem">
                <img
                  width={150}
                  height={150}
                  src={arr1.thumbnailUrl}
                  alt="Картинка"
                />
                <div>
                  <span>Autor: {arr2.name}</span>
                  <span>Company: {arr2.company.name}</span>
                </div>
              </div>
              <p>Title: {arr3.title}</p>
              <br></br>
              <br></br>
              <p>{arr3.body}</p>
            </div>
          ));
        });
      })}
    </div>
  );
}

export default Content;
