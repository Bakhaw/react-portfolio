import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import dino from '../images/dino_api.png';
import salle from '../images/salle.png';
import bootstrapStarter from '../images/bootstrap_starter.png';
import jqueryProjects from '../images/meme.png';
import airbnb from '../images/airbnb.png';
import blogAdmin from '../images/B-Admin_2.png';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 550,
    height: 450,
    overflowY: 'auto',
    fontWeight: 'bold',
  }
};

const tilesData = [
  {
    img: dino,
    title: 'API, MongoDB/Express/React/Node',
    lien: 'https://github.com/Bakhaw/dinosaure-api'
  }, {
    img: salle,
    title: "Site d'une salle de fitness, Bootstrap",
    lien: 'https://github.com/Bakhaw/Salle-de-Sport'
  }, {
    img: bootstrapStarter,
    title: 'Bootstrap template, Bootstrap',
    lien: 'https://github.com/JovanaBajat/bootstrap-starter'
  }, {
    img: jqueryProjects,
    title: 'Jquery Mini Projets, Jquery',
    lien: 'https://github.com/simplonco/jquery-mini-projects'
  }, {
    img: airbnb,
    title: 'Airbnb, Bootstrap',
    lien: 'https://github.com/Bakhaw/Airbnb'
  }, {
    img: blogAdmin,
    title: 'Interface Administrateur, Bootstrap',
    lien: 'https://github.com/Bakhaw/Projets-titre-pro'
  }
];

const GridListPortfolio = () => (
  <div className="container-fluid">
    <div className="row portfolio">
      <div className="col-md-6 competences">
        <h1>Mes Compétences:</h1>
        <div className="competences-icons">
          <div>
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-bootstrap-plain-wordmark colored"></i>
            <i class="devicon-javascript-plain colored"></i>
          </div>
          <div>
            <i class="devicon-mongodb-plain-wordmark colored"></i>
            <i class="devicon-express-original colored"></i>
            <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-nodejs-plain-wordmark colored"></i>
          </div>
          <div>
            <i class="devicon-jquery-plain-wordmark colored"></i>
            <i class="devicon-git-plain-wordmark colored"></i>
            <i class="devicon-github-plain-wordmark colored"></i>
            <i class="devicon-mocha-plain colored"></i>
            <i class="devicon-jasmine-plain colored"></i>
            <i class="devicon-sass-original colored"></i>
          </div>
        </div>
      </div>
      <div className="col-md-6 grid-list">
        <h1>Mes Projets:</h1>
        <div>
        <GridList cellHeight={180} style={styles.gridList}>
          {tilesData.map((tile) => (
            <GridTile key={tile.img} title={tile.title} subtitle={< span > <a className="soustitre" href={tile.lien} target="_blank">voir sur Github</a> < /span>} style={{borderRadius: 30}} titleBackground='rgba(120, 121, 117, 0.3)'>

              <img src={tile.img} alt="projet" className="projet-image"/>
            </GridTile>
          ))}
        </GridList>
      </div>
      </div>
    </div>
  </div>
);

export default GridListPortfolio;
