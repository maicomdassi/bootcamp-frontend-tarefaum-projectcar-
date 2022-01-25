import './styles.css';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#projectcar-navbar"
          aria-controls="projectcar-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="projectcar-navbar">
          <ul className="navbar-nav offset-md-9 main-menu">
            <li>
              <a href="link">Home</a>
            </li>
            <li>
              <a href="link">Catálago</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
