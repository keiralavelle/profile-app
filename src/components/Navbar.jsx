import { useContext } from "react";
import ModeContext from "../context/ModeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ModeContext);

  return (
    <nav>
      <button onClick={toggleTheme}>
        Theme: {theme}
      </button>
    </nav>
  );
};

export default Navbar;