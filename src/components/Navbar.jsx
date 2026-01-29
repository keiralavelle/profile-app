import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#cards">Cards</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;