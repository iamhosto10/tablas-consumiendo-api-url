import "./App.css";
import React, { useEffect, useState } from "react";
//import Datatable, { createTheme } from "react-data-table-component";
import DataTable from "react-data-table-component";

function App() {
  const [users, setUsers] = useState([]);

  const URL = "https://gorest.co.in/public/v2/users";
  const showdata = async (pagina) => {
    console.log(pagina);
    const response = await fetch(pagina);
    const data = await response.json();
    setUsers(data);
  };

  // useEffect(() => {
  //   showdata();
  // }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
  ];

  let [inputValue, setInputValue] = useState("");

  const prueba = () => {
    console.log(inputValue);
  };
  return (
    <div className="App">
      <input
        id="texto"
        name="texto"
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => showdata(inputValue)}> boton</button>

      <DataTable columns={columns} data={users} />
    </div>
  );
}

export default App;
