const Project = ({ title }) => {
    return(
        <>
            <h3>{title}</h3>
            <div className="row projects">

                <div className="col-sm-12 mb-2 col-md-4 text-center">
                    <h5>ReactJS Frontend</h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="https://github.com/rodrigorunner/node-test-github-frontend">
                                ReactJS Test Frontend
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/reactjs/weather">Weather API</a> 
                        </li>
                        <li className="list-group-item">
                            <a href="https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/reactjs/frase-aleatoria">Random Text</a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/reactjs/nfstore">NFStore</a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/reactjs/reservas">Hotel Reserve</a> 
                        </li>
                    </ul>
                </div>

                <div className="col-sm-12 col-md-4 mb-3 text-center">
                    <h5>Backend</h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="https://github.com/rodrigorunner/nodejs-test-github">React Test Backend</a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-12 col-md-4 text-center">
                    <h5>Algorithm and CRUD</h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/CRUD/PHP/cadastro">PHP CRUD</a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/l%C3%B3gica">Algorithm</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Project