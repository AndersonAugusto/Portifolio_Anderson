import React, { useState, useEffect } from 'react'
import './App.scss';

//images
import foguete from './assets/img/foguete.png'
import fogo from './assets/img/fogo.png'
import astronauta from './assets/img/astronauta.png'

const Skills = [
  {
    name: 'HTML',
    percent: '100%',
    type: 'Front-end',
    image: require('./assets/img/html.png')
  },
  {
    name: 'SCSS',
    percent: '80%',
    type: 'Front-end',
    image: require('./assets/img/sass.png')
  },
  {
    name: 'Javascript',
    percent: '90%',
    type: 'Front-end',
    image: require('./assets/img/js.png')
  },
  {
    name: 'Typescript',
    percent: '15%',
    type: 'Front-end',
    image: require('./assets/img/typescript.png')
  },
  {
    name: 'NodeJs',
    percent: '60%',
    type: 'Back-end',
    image: require('./assets/img/node.png')
  },
  {
    name: 'SQL server',
    percent: '70%',
    type: 'Others',
    image: require('./assets/img/sql-server.png')
  },
  {
    name: 'Github',
    percent: '70%',
    type: 'Others',
    image: require('./assets/img/githubSkill.png')
  },
  {
    name: 'Figma',
    percent: '100%',
    type: 'Others',
    image: require('./assets/img/figma.png')
  },
  {
    name: 'Bootstrap',
    percent: '75%',
    type: 'Front-end',
    image: require('./assets/img/bootstrap.png')
  },
  {
    name: 'React',
    percent: '50%',
    type: 'Front-end',
    image: require('./assets/img/atom.png')
  },
  {
    name: 'MongoDB',
    percent: '10%',
    type: 'Others',
    image: require('./assets/img/mongodb.png')
  },
  {
    name: 'Express',
    percent: '40%',
    type: 'Back-end',
    image: require('./assets/img/express33.png')
  },
  {
    name: 'NestJS',
    percent: '10%',
    type: 'Back-end',
    image: require('./assets/img/nest.png')
  },
  {
    name: 'Angular',
    percent: '20%',
    type: 'Front-end',
    image: require('./assets/img/AngularJS.png')
  },
  {
    name: 'English',
    percent: '50%',
    type: 'Others',
    image: require('./assets/img/english.png')
  }
]


function App() {

  const [active, setActive] = useState("All")
  const [finishedTimeout, setFinishedTimeout] = useState(true);
  const [skills, setSkills] = useState(Skills)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinishedTimeout(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const RenderSkills = () => {
    return skills.map((skill, index) => (
      <div key={index} className='box-skill'>
        <img src={skill.image} />
        <div className='size-Progressbar'>
          <p>{skill.name}</p>
          <div
            className='progressBar'
            style={{ background: `linear-gradient(90deg, rgba(90, 255, 77, 1) ${skill.percent}, rgba(60, 60, 60, 1) 0%)` }}
          > </div>
        </div>
      </div>
    ))
  }

  const handleActive = e => {

    if (e.target.value == 'All') {
      setSkills([...Skills])
      setActive(e.target.value)
      return
    }

    let newArr = Skills.filter(skill => skill.type == e.target.value)

    setSkills([...newArr])
    setActive(e.target.value)
  }

  return (
    <>
      <section className='container-top'>
        <nav className='navbar'>
          <ul>
            <li>My Skills</li>
            <li>Project</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className='caixa-foguete'>
          <div className='foguete'>
            <img
              className="carcaca"
              src={foguete} />
            {finishedTimeout &&
              <img
                className="fogo"
                src={fogo} />
            }
          </div>
        </div>
        <div className='box-astronauta'>
          {!finishedTimeout &&
            <>
              <p className='text-astronauta'>Wellcome to my portfolio!</p>
              <img className='astronauta' src={astronauta} />
            </>
          }
        </div>
      </section>
      <div>
        <h3>Skills</h3>
      </div>
      <section className='container skills-box'>
        <div className='name-skills'>
          <div>
            <div className='box-buttons'>
              <input
                type="button"
                onMouseOver={handleActive}
                value="All"
                className={active == 'All' ? 'buttonActive' : 'buttonInative'}
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Front-end"
                className={active == 'Front-end' ? 'buttonActive' : 'buttonInative'}
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Back-end"
                className={active == 'Back-end' ? 'buttonActive' : 'buttonInative'}
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Others"
                className={active == 'Others' ? 'buttonActive' : 'buttonInative'}
              />
            </div>
          </div>

          <div className='container-skills'>
            <RenderSkills />
          </div>
        </div>
      </section>
      <section className='container'>

      </section>
    </>
  );
}

export default App;
