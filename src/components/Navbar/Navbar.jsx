import "./navbar.css";
import HeaderUp from "./HeaderUp";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

function Navbar() {
  return (
    <>
      <header className="navbar-header">
        <HeaderUp />
        <HeaderMiddle />
        <HeaderBottom />
      </header>
    </>
  );
}

export default Navbar;
