import logo from "../assets/master.png";

export default function Navigation() {
  return (
    <>
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__logo">
          <div className="logo">
            <img src={logo} alt="MASTER PRO" />
          </div>
        </div>
        <div className="navigation__menu">
          <div className="navigation__research">
            <div className="navigation__research__container">
              <input
                className="navigation__input__research"
                type="text"
                placeholder="Effectuer une recherche"
              />
              <div className="navigation__input__logo">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="navigation__list">
            <div className="MENU products">
              <li>Nos produits</li>
            </div>
            <div className="MENU promos">
              <li>Promos</li>
            </div>
            <div className="MENU catalog">
              <li>Nos catalogues</li>
            </div>
            <div className="MENU contact">
              <li>Nous contacter</li>
            </div>
          </div>
        </div>

        <div className="navigation__networks">
          <div className="LOGO navigation__instagram">
            <i className="fa-brands fa-facebook"></i>
          </div>

          <div className="LOGO navigation__instagram">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </nav>
    <div className="navbar__placeholder"></div>
    </>
  );
}
