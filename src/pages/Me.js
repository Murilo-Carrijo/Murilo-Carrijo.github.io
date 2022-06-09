import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header';

import '../style/Me.css';

class Me extends Component {
  render() {
    const location = this.props.match.path;
    return(
      <div className='history-container' >
        <Header path={location} />
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
            Devido a algumas demandas de automação de relatórios tive o meu primeiro contato com linguagens de programação, ainda em 2020. Foi aí que comecei a despertar o meu interesse pela programação.Após muitas pesquisas, planejamento e superação de medos resolvi iniciar minha jornada como desenvolvedor de software. Durante minhas pesquisas encontrei a <a href='https://www.betrybe.com/?utm_source=google&utm_medium=cpc&utm_campaign=pmax2&utm_content=ad1&gclid=CjwKCAjws8yUBhA1EiwAi_tpEXYOtYlk7blnQ6U1xJzUOkCPvCmCS3fw4h9DqUJOUTQ8-VTa-aQdYhoCgwEQAvD_BwE' target='_blank' rel="noreferrer noopener">Trybe</a>, instituição onde estudo atualmente, uma instituição de ensino que chamou muito a minha atenção devido a suas políticas e sistema de didática.
          </p>
        </div>

        <div className='card'>
          <h3>Vida Profissional</h3>
          <p>
            Durante a minha vida profissional trabalhei em 5 empresas, porém irei me ater somente às duas últimas experiências profissionais para não me alongar muito.
          </p>
          <p>
            Em 2019 foi contratado pela Bunge S/A como Analista de Controladoria Pl, a empresa se localizava em Araçatuba-SP, a aproximadamente 400 km de Franca-SP (minha cidade natal) e a unidade atuava no setor alimentício. Na Bunge eu era responsável pela execução e coordenação dos inventários de insumos, produtos acabados e peças de manutenção. Além dessa responsabilidade eu também era responsável pela análise das contas do passivo do balanço patrimonial, análise SOX (com o intuito de evitar que veículos saíssem da empresa com quantidades a maior ou a menor do que constava na nota fiscal), provisões de lançamentos contábeis (despesas com água, luz, gás entre outras), lançamento de eventuais multas e preparar relatórios onde pudesse comprovar todos os resultados das minhas análises.
          </p>
          <p>
            Em setembro de 2020 participei da operação de venda da unidade da Bunge S/A de Araçatuba para o grupo Predilecta Alimentos Ltda. 
          </p>
          <p>
            Devido ao bom trabalho executado na Bunge e durante a operação de compra e venda entre as unidades, a Predilecta Alimentos Ltda decidiu me manter no quadro de funcionários que iriam permanecer após a transferência.
          </p>
          <p>
            Então em outubro de 2020 eu fui registrado na empresa Stella D’oro Ltda (uma das empresas do grupo Predilecta Alimentos Ltda) onde assumi a função de implementar processos e procedimentos para o setor de logística reversa. Para tal função coordenei uma equipe onde realizamos grandes avanços nos controle e procedimentos para o setor e implementamos melhorias para o mapeamento e organização do setor.
          </p>
          <p>
            Em abril de 2022, devido ao meu objetivo de realizar a minha transição de carreira, encerrei o meu ciclo no grupo Predilecta Alimentos Ltda e atualmente busco uma oportunidade como desenvolvedor.
          </p>
        </div>
      </div>
    );
  }
}

Me.propTypes = {
  match: PropTypes.object,
  path: PropTypes.string
};

export default Me;
