import cv from "../../assets/file/Rodrigo-Regis.pdf"
import "./index.css"

const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 mx-auto">
                    <h1 className="mb-4">Rodrigo Silva Regis</h1>
                    <p>Web <i className="fa-sharp fa-solid fa-circle-nodes fa-fade fa-2xl"></i> Developer</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="#projects">
                        <button className="btn btn-dark">Projects</button>
                    </a>
                    <a className="nav-link" href={cv} download='Rodrigo-Silva-Regis' rel="noreferrer">
                        <button className="btn btn-danger">Download CV</button>
                    </a> 
                </div>
            </div>
            
        </div>
    )
}

export default Home 