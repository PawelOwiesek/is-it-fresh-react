import "./style.css";

const Header = ({ title, clock }) => {
  return (
    <header className="header ">
      <h1 className="header__title">{title}</h1>
      <p className="header__timeString ">{clock}</p>
    </header>
  );
};

export default Header;
