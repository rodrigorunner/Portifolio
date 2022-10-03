import './style.css'

function Home() {

  return (
    <section>
      <div className="landing p-4 text-white text-center d-flex align-items-center justify-content-center flex-column">
        <h1 className='main-name mt-5'>Rodrigo Silva Regis</h1>
        <p className='sub-name'>MERN Developer</p>
      </div>
      <div className='p-4'>
        <img className='img-fluid img-logo' src={require('../../assets/img/cadastro.jpg')} alt='Foto Rodrigo Silva Regis'/>
        <h3>Sobre Mim</h3>
        <p className='text-center history'>
          Conheci a programação em 2018 em um período onde eu estava procurando por novos desafios.
          Decidi que iria viver uma transição de carreira, eu trabalhei por sete anos na área de Manutenção Industrial, minha última experiência foi como, Mecânico de Cais.
          Comecei os meus estudos com HTML, CSS e JavaScript, na minha adolescência através de leituras conheci o HTML que na época era escrito em um bloco de notas e isso me serviu como base e motivação.
          Logo surgiu o gosto de programar interface do usuário, pois os termos usabilidade e acessibilidade me chamaram a atenção despertando a curiosidade em tornar o meu código inclusivo e acessível para todos.
          Nesse período de adaptação foi preciso desenvolver diversas habilidades comportamentais para me adequar aos desafios impostos pela minha escolha, e busco por novos desafios como programador ReactJS.
        </p>
      </div>
    </section>
  );
}

export default Home;
