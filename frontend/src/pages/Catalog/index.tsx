import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';

import './styles.css';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="base-card find-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Digite sua busca"
          />
          <button className="btn btn-primary" type="button" id="btn-find">
            Buscar
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
