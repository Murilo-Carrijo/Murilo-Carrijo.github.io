import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from '../data/data';

import Header from '../Components/Header';

import '../style/Projects.css';

class Projects extends Component {
  render() {
    const location = this.props.match.path;
    return(
      <div className='projects-container'>
        <Header path={location} />
        <h1>Projetos</h1>
        <div className='projects'>
          { data.map((project) => (
            <div key={project.id} className='card-project'>
              <a href={ project.link } target='_blank' rel="noreferrer noopener">
                <img className='project-img' src={ project.image } alt={ project.name } />
              </a>
              <div className='card-project-text'>
                <h2>{ project.name }</h2>
                <p>Tecnologias Utilizadas: {project.technology} </p>
                <p>Clique na imagem para acessar o repositório do GitHub</p>
              </div>
              <a className='card-project-button' href={ project.link } target='_blank' rel="noreferrer noopener">
                <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt='github' />
              </a>
            </div>
          ) ) }
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  match: PropTypes.object,
  path: PropTypes.string
};

export default Projects;