import React from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

function Orderlist(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>email</th>
          <th>Data criada</th>
          <th>Nº de bairros atendidos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.nome}</td>
          <td>{props.email}</td>
          <td>{props.datacriada}</td>
          <td>{props.Nbairros}</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default Orderlist;
