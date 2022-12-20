import React from "react";
import Header from "../organisms/Header";
import Default from "../templates/Default";
import Orderlist from "../atoms/OrdersList";
import Avatar from "../atoms/Avatar";
//import Biouser from "../molecules/Biouser";
import { useParams } from "react-router-dom";

export default function Orders() {
  const { id } = useParams();

  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://127.0.0.1:5000/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <Default>
      <Orderlist
        id={users.userid}
        nome={users.username}
        email={users.email}
        datacriada={users.created_on}
        Nbairros={users.aten}
      />
    </Default>
  );
}
