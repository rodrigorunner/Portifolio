import "./footer.css"

const Footer = () => {
    return(
        <footer  id="contact" className="p-5 mt-3 text-white">
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-4 text-center">
                        <h5>Contact</h5>
                        <p>
                        <i className="fa-brands bg-success text-success fa-whatsapp fa-2xl"></i> (27)981282660
                        </p>
                        <p>
                        <i className="fa-regular bg-dark text-dark fa-envelope fa-2xl"></i> rodrigoregisrun@gmail.com
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center">
                        <h5>Address</h5>
                        <p>
                        <iframe style={{width: '250px'}} className="mx-auto" title="google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.058525322647!2d-40.295587724784895!3d-20.33920078114316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8163e9ab92297%3A0xdb97f1d203294e2a!2sR.%20Andr%C3%A9%20Nogueira%2C%20220%20-%20Centro%20de%20Vila%20Velha%2C%20Vila%20Velha%20-%20ES%2C%2029100-033!5e0!3m2!1spt-BR!2sbr!4v1691687473782!5m2!1spt-BR!2sbr"></iframe>
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center">
                        <h5>Social Media</h5>
                        <a href="https://www.linkedin.com/in/rodrigo-silva-regis">
                            <i className="fa-brands fa-linkedin fa-2xl"></i>
                        </a>

                        <a href="https://github.com/rodrigorunner">
                            <i className="fa-brands text-dark mx-3 fa-github fa-2xl"></i>
                        </a>
                       
                        <a href="https://www.instagram.com/rodrigo_rrunner/">
                            <i className="fa-brands fa-instagram fa-2xl text-danger"></i>
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer