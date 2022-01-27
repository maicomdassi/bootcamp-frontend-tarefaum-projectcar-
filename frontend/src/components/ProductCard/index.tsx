import './styles.css';
import ProductImg from 'assets/images/car-header-catalog.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do Produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>

        <button className="btn btn-primary" type="button">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
