import "./style.css";

const Header = ({ title }) => {
  return (
    <header className="header js-header">
      <h1 className="header__title">{title}</h1>
      <p className="header__timeString js-timeString"></p>
    </header>
  );
};

export default Header;
