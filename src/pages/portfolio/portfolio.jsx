import React from 'react';
import './portfolio.scss'

//IMAGENS
import imagePerfil from '../../img/ander.png'
import logo from '../../img/logoPort.png'

 const Portfolio = () => {
  return (
    <main className='container'>
      <header>
        <img src={ logo } alt="perfil-photo" />
      </header>

      <section className='first-section'>

        <div>
            <img className='personPhoto' src={ imagePerfil } alt="perfil-photo" />
        </div>

        <div>
            <h1> Anderson Augusto Ferrari </h1>
            <p>
            Sou desenvolvedor Full Stack, possuo sólidos conhecimentos sobre Node.js (Express) com arquitetura MVC. Tenho grande experiência com Front-end, sendo: HTML, CSS , Javascript , bootstrap e jquery. Também tenho conhecimento em desenvolvimento de SPA com os Frameworks: Angular e React.js. Obtive experiência com plataformas de gerenciamento de projetos e sistema de versionamento, sendo: Github, Trello e Asana
            </p>
        </div>
        <button> Fale comigo </button>
      </section>
    </main>
  );
}

export default Portfolio