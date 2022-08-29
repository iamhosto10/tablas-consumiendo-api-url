import "./App.css";
import React, { useState, useRef } from "react";
//import Datatable, { createTheme } from "react-data-table-component";
import DataTable from "react-data-table-component";

function App() {
  const insearch = useRef(null);
  const select = useRef(null);
  let [searchvalue, setSearchvalue] = useState(""); // obtiene en cada momento lo que se escribe en el input para filtrar
  let [users, setUsers] = useState([]); // guarda los datos obtenidos de la Api
  let [columnas, setColumnas] = useState([]); // guarda las columnas obtenidas de la Api
  let [inputValue, setInputValue] = useState(""); // obtiene en cada momento lo que se escribe en el input de la url de la api
  let [filtered, setFiltered] = useState([]); // guarda el array de los filtrados
  let [selectval, setSelectval] = useState(""); // guarda el valor del select de las columnas

  // llamar los datos de la api
  const showdata = async (pagina) => {
    console.log(pagina);
    const response = await fetch(pagina);
    const data = await response.json();
    setUsers(data);
    let lista = [];
    let lista2 = [];
    lista = Object.keys(data[0]);
    lista.forEach((element) => {
      const letra = "(row) => row." + element;
      lista2.push({
        name: element + "",
        selector: eval(letra),
      });
    });
    console.log("lista2");
    console.log(lista2);
    setColumnas(lista2);
  };

  // otra forma de escribir todos los datos obtenidos de un input
  const onChangetext = (event) => {
    event.preventDefault();
    const text = insearch.current.value;
    console.log(text);
    setSearchvalue(text);
  };

  // busqueda por filtrado de los escrito en el input

  const onsearchsub = (event) => {
    if (event.key !== "Enter") return;
    // insearch.current.value = "";
    let filtrado = [];
    users.map((item) => {
      console.log(item);
      if (selectval === "" || selectval === "Default") {
        console.log("es default");
      }
      if (selectval !== "" && selectval !== "Default") {
        console.log("entro");
        try {
          if (
            eval("item." + selectval + ".toString().includes(searchvalue+'')")
          ) {
            filtrado.push(item);
          }
        } catch (error) {}
      }
    });
    console.log(filtrado);
    setFiltered(filtrado);
  };

  // esta funcion es para obtener los datos del select
  const seleccionado = () => {
    setSelectval(select.current.value);
    console.log(select.current.value);
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
      <DataTable columns={columnas} data={users} />
      <div>
        <input ref={insearch} onChange={onChangetext} onKeyDown={onsearchsub} />
        <select
          ref={select}
          name="tipos"
          className="form-control"
          onChange={(e) => seleccionado()}
          defaultValue={{ label: "Selecciona una opcion ", value: "Default" }}
        >
          <option value="Default">Selecciona una opcion</option>
          {columnas.map((element) => (
            <option key={element.name} value={element.name}>
              {element.name}
            </option>
          ))}
        </select>
        <DataTable columns={columnas} data={filtered} />
      </div>
    </div>
  );
}

export default App;
