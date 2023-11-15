import { Link } from "react-router-dom";


export default function Navba() {
return (
<section>
    <nav id="navbar">
        <h1>Muddabir Masood</h1>
        <ul className="navlinks">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">My Work</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
        </ul>
    </nav>
</section>    
)

}