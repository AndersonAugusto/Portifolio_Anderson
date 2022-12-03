import React, { useState, useEffect } from 'react'
import './App.scss';

//images
import foguete from './assets/img/foguete.png'
import fogo from './assets/img/fogo.png'

function App() {

  const [finishedTimeout, setFinishedTimeout] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinishedTimeout(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className='container-top'>
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
      </section>
      <section className='container'>
        sdasd
      </section>
    </>
  );
}

export default App;
