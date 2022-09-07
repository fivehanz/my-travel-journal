import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" className="header-img" />
      <p className="header-text">my travel journal.</p>
    </header>
  );
};

export default Header;
