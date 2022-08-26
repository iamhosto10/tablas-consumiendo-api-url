import "./App.css";
import React, { useState } from "react";
//import Datatable, { createTheme } from "react-data-table-component";
import DataTable from "react-data-table-component";

function App() {
  let [users, setUsers] = useState([]);
  let [columnas, setColumnas] = useState([]);
  let [inputValue, setInputValue] = useState("");

  const showdata = async (pagina) => {
    console.log(pagina);
    const response = await fetch(pagina);
    const data = await response.json();
    setUsers(data);
    console.log(users);
    console.log(data);
    // data.map((prueba, index) => console.log(index));
    console.log(Object.keys(data[0]));

    // const columns = [
    //   {
    //     name: "id",
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
    //   {
    //     name: "gender",
    //     selector: (row) => row.gender,
    //   },
    //   {
    //     name: "status",
    //     selector: (row) => row.status,
    //   },
    // ];
    // console.log("columnas");
    // console.log(columns);

    let lista = [];
    var lista2 = [];
    lista = Object.keys(data[0]);
    lista.forEach((element) => {
      // const letra = "(row) => row." + element;
      // const prueba = [
      //   {
      //     name: { element },
      //     selector: letra,
      //     // selector: { `(row) => row.`${ element } },
      //   },
      // ];
      const letra = "(row) => row." + element;
      lista2.push({
        name: { element },
        selector: eval(letra),
      });
    });
    console.log("lista2");
    console.log(lista2);
    // lista2 = ["id", "name", "email", "gender", "status"];
    setColumnas(lista2);
    console.log("columnas");
    console.log(columnas);

    // let lista = [];

    // for (var key in data) {
    //   lista.push(data[key]);
    //   console.log(lista);
    // }
    // setColumnas(lista);
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
