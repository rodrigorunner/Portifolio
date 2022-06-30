import './style.css'

function Projects() {
  return (
    <div className='container p-5 mt-5'>
        <h3>Projetos</h3>
        <section>
          <h5>ReactJS</h5>
          <ul className='list-group'>

            <li className='list-group-item'>
              <a target='blank' href="https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/reactjs/frase-aleatoria">Frase Aleatória</a>
            </li>

            <li className='list-group-item'>
              <a target='blank' href='https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/reactjs/nfstore'>NFS Store</a>
            </li>

            <li className='list-group-item'>
              <a target='blank' href='https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/reactjs/reservas'>Reservas</a>
            </li>
            <li className='list-group-item'>
              <a target='blank' href='https://github.com/rodrigorunner/Rodrigo-Regis/tree/main/reactjs/weather'>Clima Tempo</a>
            </li>
          </ul>
        </section>
    </div>
  );
}

export default Projects;
