import React, { useState } from "react";

import axios from "axios"; //used for making http calls like get,post for connectivity of the react components with node server

function Dummy() {
  const [sta, setSta] = useState({
    txtFromServer: "waiting",
    txtToServer: "Default",
  });
  const getDataFromServer = () => {
    axios
      .get("/")
      .then((res) => {
        console.log(res.data);
        setSta({ txtFromServer: res.data });
      })
      .catch((err) => console.log(err));
  };

  const change = (event) => {
    setSta({
      txtFromServer: sta.txtFromServer,
      txtToServer: event.target.value,
    });
    console.log(sta.txtFromServer);
  };

  const setDataToServer = () => {
    axios
      .post("/", { name: sta.txtToServer })
      .then(() => console.log("It worked..."))
      .catch((error) => {
        console.log("Not worked");
        console.log(error);
      });
  };

  return (
    <div>
      <h1>{sta.txtFromServer}</h1>
      <button onClick={getDataFromServer}>Trigger to fetch data</button>
      <br />
      <br />
      <input
        type="text"
        onChange={change}
        value={sta.txtToServer}
        placeholder="Input data"
      />
      <button onClick={setDataToServer}>Trigger to Set data</button>
    </div>
  );
}

export default Dummy;
