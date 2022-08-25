import React from "react";

function LLamarapi() {
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


}
