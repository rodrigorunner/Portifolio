import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './style.css'

function Sobre() {
  return (
    <div className="container p-5 mt-5">
      <h3>Contatos</h3>
      <div className="row text-center">
        <div className="col-sm-12 col-md-6 p-4">
            <h4>Redes Sociais</h4>           
            <a className='contatos-footer linkedin' target='blank' href='https://www.linkedin.com/in/rodrigo-silva-regis'><FaLinkedin/></a>
            <a className='contatos-footer mx-2 github'  target='blank' href='https://github.com/rodrigorunner'><FaGithub/></a>
            <a className='contatos-footer instagram'  target='blank' href='https://www.instagram.com/rodrigo_rrunner/'><FaInstagram/></a>  
            <p>
              <span className="whats"><FaWhatsapp/> 27992343480</span>  
            </p> 
        </div>
        <div className="col-sm-12 col-md-6">
            <h4>Endereço</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0586469396294!2d-40.295201484917484!3d-20.339195756416565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8163e9ab92297%3A0xdb97f1d203294e2a!2sR.%20Andr%C3%A9%20Nogueira%2C%20220%20-%20Centro%20de%20Vila%20Velha%2C%20Vila%20Velha%20-%20ES%2C%2029100-033!5e0!3m2!1spt-BR!2sbr!4v1656594316590!5m2!1spt-BR!2sbr" loading="lazy" title='maps'></iframe>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
