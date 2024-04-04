import logo from "../images/logo.png";
import "../styles/navbar.css"
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="" className="navbarLogo"/>
            <div id="navlinks">
                <a href="#section2">Emotions</a>
                <a href="#section4">Manifesto</a>
                <a href="#section6">Self-awareness test</a>
                <a href="#section8">Work with us</a>
                <button className="navbarButton">Download app</button>

            </div>
        </nav>
     );
}
 
export default Navbar;