import React, { useState, useEffect } from "react";
import "./App.scss";

//images
import foguete from "./assets/img/foguete.png";
import fogo from "./assets/img/fogo.png";
import astronauta from "./assets/img/astronauta.png";
import MyPhoto from "./assets/img/ander.png";
import alienigena from "./assets/img/alienigena.webp";

import github from "./assets/img/github.png";
import linkedin from "./assets/img/linkedin.png";
import whatsapp from "./assets/img/whatsapp.png";

const Skills = [
  {
    name: "HTML",
    percent: 100,
    type: "Front-end",
    image: require("./assets/img/html.png"),
  },
  {
    name: "SCSS",
    percent: 80,
    type: "Front-end",
    image: require("./assets/img/sass.png"),
  },
  {
    name: "Javascript",
    percent: 90,
    type: "Front-end",
    image: require("./assets/img/js.png"),
  },
  {
    name: "Typescript",
    percent: 15,
    type: "Front-end",
    image: require("./assets/img/typescript.png"),
  },
  {
    name: "NodeJs",
    percent: 60,
    type: "Back-end",
    image: require("./assets/img/node.png"),
  },
  {
    name: "SQL server",
    percent: 70,
    type: "Others",
    image: require("./assets/img/sql-server.png"),
  },
  {
    name: "Git",
    percent: 70,
    type: "Others",
    image: require("./assets/img/githubSkill.png"),
  },
  {
    name: "Figma",
    percent: 100,
    type: "Others",
    image: require("./assets/img/figma.png"),
  },
  {
    name: "Bootstrap",
    percent: 100,
    type: "Front-end",
    image: require("./assets/img/bootstrap.png"),
  },
  {
    name: "React",
    percent: 50,
    type: "Front-end",
    image: require("./assets/img/atom.png"),
  },
  {
    name: "MongoDB",
    percent: 10,
    type: "Others",
    image: require("./assets/img/mongodb.png"),
  },
  {
    name: "Express",
    percent: 40,
    type: "Back-end",
    image: require("./assets/img/express33.png"),
  },
  {
    name: "NestJs",
    percent: 10,
    type: "Back-end",
    image: require("./assets/img/nest.png"),
  },
  {
    name: "Angular 2",
    percent: 20,
    type: "Front-end",
    image: require("./assets/img/AngularJS.png"),
  },
  {
    name: "English",
    percent: 50,
    type: "Others",
    image: require("./assets/img/english.png"),
  },
];

const Projects = [
  {
    image: require("./assets/img/forca.png"),
    title: "Hangman Game",
  },
  {
    image: require("./assets/img/jogo-da-velha.png"),
    title: "Hash Game",
  },
  {
    image: require("./assets/img/predio-comercial.png"),
    title: "Building",
  },
  {
    image: require("./assets/img/logoMercadao.png"),
    title: "Marketplace",
  },
  {
    image: require("./assets/img/buttonsImage.png"),
    title: "Buttons",
  },
];

function App() {
  const [active, setActive] = useState("All");
  const [finishedTimeout, setFinishedTimeout] = useState(true);
  const [skills, setSkills] = useState(Skills);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinishedTimeout(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const RenderSkills = () => {
    return skills.map((skill, index) => (
      <div key={index} className="box-skill">
        <img src={skill.image} />
        <div className="size-Progressbar">
          <p>{skill.name}</p>
          <div
            className="progressBar"
            style={{
              background: `linear-gradient(90deg, rgba(90, 255, 77, 1) ${skill.percent}%, rgba(60, 60, 60, 1) 0%)`,
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    ));
  };

  const RenderProjects = () => {
    return Projects.map((project) => (
      <div className="box-project">
        <img src={project.image} />
        <p>{project.title}</p>
      </div>
    ));
  };

  const handleActive = (e) => {
    if (e.target.value == "All") {
      setSkills([...Skills]);
      setActive(e.target.value);
      return;
    }

    let newArr = Skills.filter((skill) => skill.type == e.target.value);

    setSkills([...newArr]);
    setActive(e.target.value);
  };

  return (
    <>
      <section className="container-top">
        <nav className="navbar">
          <ul>
            <li>My Skills</li>
            <li>Project</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="caixa-foguete">
          <div className="foguete">
            <img className="carcaca" src={foguete} />
            {finishedTimeout && <img className="fogo" src={fogo} />}
          </div>
        </div>
        <div className="box-astronauta">
          {!finishedTimeout && (
            <>
              <p className="text-astronauta">Wellcome to my portfolio!</p>
              <img className="astronauta" src={astronauta} />
            </>
          )}
        </div>
      </section>
      <div className="title">
        <h3>Skills</h3>
      </div>
      <section className="container skills-box">
        <div className="name-skills">
          <div>
            <div className="box-buttons">
              <input
                type="button"
                onMouseOver={handleActive}
                value="All"
                className={active == "All" ? "buttonActive" : "buttonInative"}
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Front-end"
                className={
                  active == "Front-end" ? "buttonActive" : "buttonInative"
                }
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Back-end"
                className={
                  active == "Back-end" ? "buttonActive" : "buttonInative"
                }
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Others"
                className={
                  active == "Others" ? "buttonActive" : "buttonInative"
                }
              />
            </div>
          </div>

          <div className="container-skills">
            <RenderSkills />
          </div>
        </div>
      </section>
      <div className="title">
        <h3>Projects</h3>
      </div>
      <section className="container projects-box ">
        <div className="project-box">
          <RenderProjects />
        </div>
      </section>
      <div className="title">
        <h3>About Me</h3>
      </div>
      <section className="container box-aboutMe ">
        <div className="aboutMe-box">
          <div className="aboutMe-photo">
            <img src={MyPhoto} />
          </div>
          <div className="description">
            <h3>Anderson Augusto Ferrari</h3>
            <p>
              Sou desenvolverdor Full stack Jr. Possuo sólidos conhecimentos Sou
              desenvolvedor Full Stack, possuo sólidos conhecimentos sobre
              Node.js (Express) com arquitetura MVC. Tenho grande experiência
              com Front-end, sendo: HTML, CSS , Javascript , bootstrap e jquery.
              Também tenho conhecimento em desenvolvimento de SPA com os
              Frameworks: Angular e React.js. Obtive experiência com plataformas
              de gerenciamento de projetos e sistema de versionamento, sendo:
              Github, Trello e Asana.
            </p>
            <div className="alienigena">
              <img src={alienigena} />
              <div className="feixe"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="title">
        <h3>Contact me</h3>
      </div>
      <section className="container box-contact-me">
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" className="amongInput" />
          <textarea placeholder="Type your message..." />
          <div>
            <button>SEND</button>
          </div>
        </form>
        <div className="socialMedia">
          <div className="box-socialMedia">
            <img src={github} />
            <span> Github </span>
          </div>
          <div className="box-socialMedia">
            <img src={whatsapp} />
            <span> Whatsapp </span>
          </div>
          <div className="box-socialMedia">
            <img src={linkedin} />
            <span> LinkedIn </span>
          </div>
        </div>
      </section>
      <section className="copy-right ">
        <p> 2022 - Todos os direitos reservados </p>
      </section>
    </>
  );
}

export default App;
