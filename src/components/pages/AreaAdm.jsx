import React from "react";

import Default from "../templates/Default";

import Principal from "../molecules/Principal";

import { useParams } from "react-router-dom";
//import Sidebar from "../molecules/sidebar";

export default function AreaAdm() {
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
      <Principal
        npedidos={users.npedidos}
        username={users.username}
        dinano={users.dinano}
        dinmensal={users.dinmensal}
        vip={users.NºclientesVip}
      />
    </Default>
  );
}
