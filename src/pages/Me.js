import React, { Component } from 'react';

import '../style/Me.css';

class Me extends Component {
  render() {
    return(
      <div className='history-container' >
        <h1>Minha Jornada</h1>
        <div className='card' >
          <h3>Curiosidades</h3>
          <p>Eu tenho 33 anos, nascido e criado em Franca, uma pequena cidade do interior de São Paulo que faz divisa com Minas Gerais.Sou apaixonado por filmes e séries, eu sou o tipo de pessoa que maratona uma série em um fim de semana, mas também adoro praticar esportes. Normalmente eu me exercito fazendo exercícios na academia, mas o meu esporte favorito é futebol. 
          </p>
        </div>

        <div className='card' >
          <h3>Vida acadêmica</h3>
          <p>
          A minha paixão pela tecnologia veio tardiamente, antes de começar a estudar para me tornar um desenvolvedor de software eu trilhei uma jornada no setor administrativo. Em 2010 eu me formei em Administração de Empresas pela <a href='https://www.unifacef.com.br/' target='_black'>Uni-Facef</a>, onde também fiz o meu primeiro MBA em Gestão Empresarial que se iniciou em 2011 e que foi concluído em 2014.
          </p>
          <p>
          Junto com o meu MBA em Gestão empresarial eu fiz o curso técnico em Ciências Contábeis, que iniciei em 2011 e que foi concluído em 2012. Em 2019, devido a função que eu ocupava na Bunge S/A, iniciei o meu segundo MBA em Controladoria e Finanças pela <a href='http://moodle.faculdademetropolitana.edu.br/' target='_blank' rel="noreferrer noopener">Metropolitana</a> e concluído em 2020. 
          </p>
          <p>
          Devido a algumas demandas de automação de relatórios tive o meu primeiro contato com linguagens de programação, ainda em 2020. Foi aí que comecei a despertar o meu interesse pela programação.Após muitas pesquisas, planejamento e superação de medos resolvi iniciar minha jornada como desenvolvedor de software. Durante minhas pesquisas encontrei a Trybe, instituição onde estudo atualmente, uma instituição de ensino que chamou muito a minha atenção devido a suas políticas e sistema de didática.
          </p>
        </div>
      </div>
    );
  }
}

export default Me;