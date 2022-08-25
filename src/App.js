import "./App.css";
import React, { useEffect, useState } from "react";
import Datatable, { createTheme } from "react-data-table-component";

function App() {
  const [users, setUsers] = useState([]);

  const URL = "https://gorest.co.in/public/v2/users";
  const showdata = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    showdata();
  }, []);

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

  return (
    <div className="App">
      <Datatable columns={columns} data={users} />
    </div>
  );
}

export default App;
