import "../../style/Principal.css";

const Principal = () => {
  return (
    <div className="Principal__container">
      <div className="Principal__title">
        <div className="main__greeting">
          <h1>Olá</h1>
          <p>Bem vindo</p>
        </div>
      </div>

      <div className="Principal__cards">
        <div className="card">
          <i className="fa fa-file-text fa-2x text-lightblue"></i>
          <div className="card_inner">
            <p className="text-primary-p">Numero de pedidos</p>
            <span className="font-bold text-title">578</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-money fa-2x text-yellow"></i>
          <div className="card_inner">
            <p className="text-primary-p">Dinheiro arrecadado</p>
            <span className="font-bold text-title">578</span>
          </div>
        </div>
        <div className="card">
          <i className="fa fa-archive fa-2x text-green"></i>
          <div className="card_inner">
            <p className="text-primary-p">Restaurantes atendidos</p>
            <span className="font-bold text-title">578</span>
          </div>
        </div>
        <div className="card">
          <i className="fa fa-child fa-3x"></i>
          <div className="card_inner">
            <p className="text-primary-p">Clientes Vip</p>
            <span className="font-bold text-title">578</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Principal;
