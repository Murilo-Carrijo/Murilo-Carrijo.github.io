import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../style/Home.css';
import murilo from'../image/murilo.png';

class Home extends Component {
  render() {
    return(
      <div className='home-container'>
        <div className='home-header-container'>
          <div className='text-container'>
            <h1>Olá, eu sou o Murilo!</h1>
            <h2>Desenvolvedor Front End</h2>
            <div className='link-container'>
          <div>
            <a href='https://www.linkedin.com/in/murilo-carrijo/' target='_blank' rel="noreferrer">
              <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='linkedin' />
            </a>
          </div>
          <div>
            <a href='https://github.com/Murilo-Carrijo' target='_blank' rel="noreferrer">
              <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt='github' />
            </a>
          </div>
            </div>
          </div>
          <img className='profile-image' src={murilo} />
        </div>
        <div className="card-container">
          <div className="card-description">
            <h3 className="card-title" >Um pouco a meu respeito</h3>
            <p>Sou um profissional formado em administração de empresas que se apaixonou pela área de desenvolvimento de software, e que agora vive uma transição de carreira.</p>
            <p>Estudo desenvolvimento de software na Trybe e tenho como objetivo desenvolver minha carreira sob a supervisão e estímulo de uma empresa comprometida com a inovação.</p>
            <button type="button" className="button-card-description"><Link to='/historia'>Saiba Mais</Link></button>
          </div>

          <div className="card-description">
            <h3 className="card-title">Meus projetos</h3>
            <p>Durante o meu curso na Trybe pude desenvolver projetos incríveis, que foram desafiadores e me propiciaram muitos aprendizados.</p>
            <p>Para desenvolver os projetos foram utilizadas diversas tecnologias como HTML, CSS, JavaScript, React entre outras. </p>
            <button type="button" className="button-card-description"><Link to='/projetos'>Saiba Mais</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;