import Navbar from 'components/Navbar';
import { ReactComponent as MainImage } from 'assets/images/car-header-home.svg';
import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-card bg-primary">
        <div className="home-image-container">
          <MainImage />
        </div>

        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="home-button-container base-card">
        <button className="btn btn-primary"> VER CATÁLOGO </button>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
}

export default Home;
