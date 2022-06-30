import { Link } from 'react-router-dom'
import { FaRProject } from "react-icons/fa";
import './style.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light navbar-transparente">
        <div className="container">
            <Link className="navbar-brand text-white logo" to='/'><FaRProject /></Link>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                       <Link className="nav-link text-white"  to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link text-white"  to='/projetos'>Projetos</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link text-white"  to='/formacao'>Formação</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to='/experiencia'>Experiencia</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/contatos' >Contatos</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Header;
