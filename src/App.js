import { useState, useEffect, useMemo } from "react";

import { Zad1 } from "./components/Zad1";
import { Zad2 } from "./components/Zad2";
import { Zad3 } from "./components/Zad3";
import { Zad4 } from "./components/Zad4";
import { Zad5 } from "./components/Zad5";
import { Zad6 } from "./components/Zad6";

function App() {
  const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const [columns, setColumns] = useState([]);

  const loopData = () => {
    const columnsInData = [];
    for (let key in data) {
      columnsInData.push(key);
    }
    setColumns(columnsInData);
  };

  useEffect(() => {
    loopData();
  }, []);

  return (
    <div>
      <Zad1 />
      <Zad2 />
      <Zad3 data={data} columns={columns} />
      <Zad4 />
      <Zad5 />
      <Zad6 />
    </div>
  );
}

export default App;
