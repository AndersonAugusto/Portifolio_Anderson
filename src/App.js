import React from 'react'
import './App.scss';

//IMAGENS
import imagePerfil from './img/ander.png'
import logo from './img/logoPort.png'
import instagram from './img/instagram.png'
import facebook from './img/facebook.png'
import whatsapp from './img/whatsapp.png'
import github from './img/github.png'
import linkedin from './img/linkedin.png'

function App() {
  
  return (
    <main className='container'>

      <section className='first-section'>
           <div className='container-card'>
              <div className='info-card'>
                <img className='personPhoto' src={ imagePerfil } alt="perfil-photo" />
                  <h1> Anderson Ferrari </h1>
                  <p>Full stack Developer</p>
                  <div className='social-icons'>
                    <img src={ instagram } alt="perfil-photo" />
                    <img src={ linkedin } alt="perfil-photo" />
                    <img src={ whatsapp } alt="perfil-photo" />
                    <img src={ github } alt="perfil-photo" />
                  </div>
              </div>
              <div className='text-card'>
                <h3> Anderson Augusto Ferrari </h3>
                <h4> Full Stack Developer </h4>
                <p>
                Sou desenvolvedor Full Stack, possuo sólidos conhecimentos sobre Node.js (Express) com arquitetura MVC. Tenho grande experiência com Front-end, sendo: HTML, CSS , Javascript , bootstrap e jquery. Também tenho conhecimento em desenvolvimento de SPA com os Frameworks: Angular e React.js. Obtive experiência com plataformas de gerenciamento de projetos e sistema de versionamento, sendo: Github, Trello e Asana.
                </p>
              </div>
          </div>
      </section>
      <section className='secont-section'>
          <div>
              2
          </div>
      </section>
    </main>
  );
}

export default App;
