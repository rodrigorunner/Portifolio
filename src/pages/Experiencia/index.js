import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from "react-icons/fa";
import './style.css'

function Experiencia() {
  return (
    <div className='container pt-5 mt-5'>
      <h1>Exp</h1>
      <ul className='list-group p-2'>
        <li className='list-group-item'>
          <strong>Empresa: </strong>Ideyas Innovation
          <p><strong>Cargo: </strong>Dev Front-end</p>
          <p>
            <strong>Job Description: </strong> 
            Você irá vivenciar experiências diárias em nossas sprints: 
            Dev (desenvolvedor) conectado com o time de engenharia, produto e negócio. Mão na massa! É preciso estar junto na operação, desenvolvendo o produto/plataforma com impacto direto sobre as entregas/resultados e envolvido com o ciclo de vida do desenvolvimento. Queremos seu envolvimento para nos ajudar a desenvolver negócios, produtos e serviços auto ajustáveis. Com o crescimento do negócio, o papel agrega-se garantir que a cultura não se perca com alinhamento das pessoas. Design Thinking: compreender as dores do cliente, os problemas técnicos, de negócios e desenvolver soluções para eles. Colaborar com definições arquitetônicas. Integrar com serviços de terceiros. Estruturas de dados. Construção e análise de algoritmos. Em resumo, para essa oportunidade é importante ter uma visão do problema para desenvolvimento das soluções. Equilibrando com outras habilidades que estará envolvido e aprendendo, como: Metodologias Design Thinking + Lean UX + Agile. Visual Studio Code. Git | Processos (versionamento, segurança do código). Foco em Lógica. Mente aberta para aprender o Django; Mente aberta para aprender o Design e Git.
          </p>
          <p><strong>Tecnologias: </strong>
           <span className="html"><FaHtml5/></span> <span className="css"><FaCss3Alt /></span>  <span className="js"><FaJsSquare/></span> <span className="py"><FaPython/></span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Experiencia;
