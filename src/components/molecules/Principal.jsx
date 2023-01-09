import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../style/Principal.css";

function Principal(props) {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col className="Col">
          <h1>Bem vindo</h1>
          <p>O {props.username} teve:</p>
          <Card>
            <Card.Body>
              <Card.Title>O Numero de pedidos igual a</Card.Title>
              <Card.Text>{props.npedidos}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>O Arrecadamento Mensal Foi</Card.Title>
              <Card.Text>{props.dinmensal}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>O Arrecandamento Anual foi</Card.Title>
              <Card.Text>{props.dinano}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>O Numero de Clientes Vips Foram</Card.Title>
              <Card.Text>{props.vip}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Principal;
