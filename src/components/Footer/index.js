import { Link } from 'react-router-dom'
import { FaRProject, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import './style.css'

function Footer() {
  return (
    <footer className='p-4'>
        <div className="container footer text-center">
            <div className="row">
                <div className='col-sm-12 col-md-4'>
                    <Link className='text-white logo' to='/'><FaRProject/></Link>
                    <ul className='list-group'>
                        <li className='nav-link text-white'>
                            <Link className='text-white' to='/'>Home</Link>
                        </li>
                        <li className='nav-link text-white'>
                            <Link className='text-white' to='/projetos'>Projetos</Link>
                        </li>
                        <li className='nav-link text-white'>
                            <Link className='text-white' to='/formacao'>Formação</Link>
                        </li>
                        <li className='nav-link text-white'>
                            <Link className='text-white' to='/experiencia'>Experiencia</Link>
                        </li>
                        <li className='nav-link text-white'>
                            <Link className='text-white' to='/contatos'>Contato</Link>
                        </li>
                    </ul>
                </div>

                <div className='col-sm-12 col-md-4 mt-3 text-white'>
                    <h3>Endereço</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0586469396294!2d-40.295201484917484!3d-20.339195756416565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8163e9ab92297%3A0xdb97f1d203294e2a!2sR.%20Andr%C3%A9%20Nogueira%2C%20220%20-%20Centro%20de%20Vila%20Velha%2C%20Vila%20Velha%20-%20ES%2C%2029100-033!5e0!3m2!1spt-BR!2sbr!4v1656594316590!5m2!1spt-BR!2sbr" loading="lazy" title='maps'></iframe>
                </div>

                <div className='col-sm-12 col-md-4 mt-3 text-white'>
                    <h3>Contatos</h3>
                    <a className='contatos-footer linkedin' target='blank' href='https://www.linkedin.com/in/rodrigo-silva-regis'><FaLinkedin/></a>
                    <a className='contatos-footer mx-2 github'  target='blank' href='https://github.com/rodrigorunner'><FaGithub/></a>
                    <a className='contatos-footer instagram'  target='blank' href='https://www.instagram.com/rodrigo_rrunner/'><FaInstagram/></a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
