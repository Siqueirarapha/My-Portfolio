import { useState } from 'react';
import './hardSkill.css';

function HardSkill() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
  { 
    name: 'JavaScript', 
    icon: 'javascript/javascript-original.svg', 
    desc: 'JavaScript é uma linguagem de programação versátil e amplamente utilizada para desenvolvimento web.', 
    color: '#f7df1e' // amarelo
  },
  { 
    name: 'React', 
    icon: 'react/react-original.svg', 
    desc: 'React é uma biblioteca JavaScript para construção de interfaces de usuário.', 
    color: '#61dafb' // azul React
  },
  { 
    name: 'Node.js', 
    icon: 'nodejs/nodejs-original.svg', 
    desc: 'Node.js é um ambiente de execução JavaScript no lado do servidor.', 
    color: '#68a063' // verde Node
  },
  { 
    name: 'CSS', 
    icon: 'css3/css3-original.svg', 
    desc: 'CSS é uma linguagem de estilo usada para descrever a apresentação de documentos HTML.', 
    color: '#26aee4ff' // azul CSS
  },
  { 
    name: 'HTML', 
    icon: 'html5/html5-original.svg', 
    desc: 'HTML é a linguagem de marcação padrão para criar páginas da web.', 
    color: '#e34c26' // laranja HTML
  },
  { 
    name: 'GitHub', 
    icon: 'github/github-original.svg', 
    desc: 'GitHub é uma plataforma de hospedagem de código-fonte e controle de versão usando o Git.', 
    color: '#000000ff' // branco GitHub
  },
  { 
    name: 'Python', 
    icon: 'python/python-original.svg', 
    desc: 'Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe clara e legibilidade.', 
    color: '#3776ab' // azul Python
  },
  { 
    name: 'Java', 
    icon: 'java/java-original.svg', 
    desc: 'Java é uma linguagem de programação de propósito geral, amplamente utilizada em desenvolvimento de aplicativos empresariais.', 
    color: '#e11f21' // vermelho Java
  },
];


  return (
    <section id="hard-skill-separado" id="skills">
    <div className="c-skill">
      <div className="skill-container">
        <div className="skill-title">
          <h2>Hard Skills</h2>
        </div>
        <div className='skill-container2'>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <img src={`../../../public/icons/${skill.icon}`} alt={`icon ${skill.name}`} />
              </div>
            ))}
          </div>

                        <div className='explination-hardskill'>
                {activeSkill ? (
                    <>
                    <h3 style={{ color: activeSkill.color }}>{activeSkill.name}</h3>
                    <p>{activeSkill.desc}</p>
                    </>
                ) : (
                    <p>Passe o mouse sobre os ícones para ver as tecnologias.</p>
                )}
                </div>

        </div>
      </div>
    </div>
    </section>
  );
}

export default HardSkill;
