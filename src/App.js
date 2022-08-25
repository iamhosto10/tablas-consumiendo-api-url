import "./App.css";
import React, { useEffect, useState } from "react";
//import Datatable, { createTheme } from "react-data-table-component";
import DataTable from "react-data-table-component";

function App() {
  const [users, setUsers] = useState([]);
  const [columnas, setColumnas] = useState([]);
  let [inputValue, setInputValue] = useState("");

  const showdata = async (pagina) => {
    console.log(pagina);
    const response = await fetch(pagina);
    const data = await response.json();
    setUsers(data);
    console.log(data);
    // data.map((prueba, index) => console.log(index));
    data.forEach((element) => {
      element.forEach((ele) => {
        console.log(ele.id);
      });
    });
    let lista = [];

    for (var key in data) {
      lista.push(data[key]);
      console.log(lista);
    }
    setColumnas(lista);
  };

  // useEffect(() => {
  //   showdata();
  // }, []);

  // const columns = [
  //   {
  //     name: "ID",
  //     selector: (row) => row.id,
  //   },
  //   {
  //     name: "name",
  //     selector: (row) => row.name,
  //   },
  //   {
  //     name: "email",
  //     selector: (row) => row.email,
  //   },
  // ];

  return (
    <div className="App">
      <input
        id="texto"
        name="texto"
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => showdata(inputValue)}> boton</button>
      <DataTable columns={columnas} data={users} />
    </div>
  );
}

export default App;
