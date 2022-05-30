import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../style/Header.css';

class Header extends Component {
  render() {
    const { path } = this.props;
    console.log(path);
    return(
      <div className='header-container'>
        <Link to='/'>Página Inicial</Link>
        { path === '/projetos' ? 
          <Link to='/historia' >Minha Jornada</Link> :
          <Link to='/projetos' >Meus Projetos</Link>
        }
        <div className='link-header-container'>
          <a href='https://www.linkedin.com/in/murilo-carrijo/' target='_blank' rel="noreferrer">
            <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='linkedin' />
          </a>
        </div>
        <div className='link-header-container'>
          <a href='https://github.com/Murilo-Carrijo' target='_blank' rel="noreferrer">
            <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt='github' />
          </a>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string
};


export default Header;