import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Competences from './Competences';
// Import des img projets
import dino from '../images/dino_api.png';
import salle from '../images/salle.png';
import bootstrapStarter from '../images/bootstrap_starter.png';
import jqueryProjects from '../images/meme.png';
import airbnb from '../images/airbnb.png';
import blogAdmin from '../images/B-Admin_2.png';
// Import css
import './stylesheets/GridList.css';

//Responsive

import Responsive from 'react-responsive';

const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
const Tablet  = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
const Mobile  = ({ children }) => <Responsive maxWidth={767} children={children} />;
const Default = ({ children }) => <Responsive minWidth={768} children={children} />;

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
  },
  titleStyle: {
    color: 'rgb(217, 216, 204)',
  },
};

const mobileStyles = {
  gridList: {
    width: 400,
    height: 300,
    overflowY: 'auto',
    margin: 'auto',
  },
}

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
    {/* DESKTOP VERSION */}
    <Desktop>
    <div className="row portfolio">
      <div className="col-md-6 competences">
        <h1>Mes Compétences:</h1>
        <div>
          <Competences />
        </div>
      </div>
      <div className="col-md-6 grid-list">
        <h1>Quelques Projets:</h1>
        <div>
        <GridList cellHeight={180} style={styles.gridList}>
          {tilesData.map((tile) => (
            <a href={tile.lien} target="_blank">
            <GridTile key={tile.img} title={tile.title} subtitle={< span > <a className="soustitre" href={tile.lien} target="_blank">voir sur Github</a> < /span>} style={{borderRadius: 30}} titleStyle={styles.titleStyle} titleBackground='rgba(6, 6, 6, 0.86)'>

              <img src={tile.img} alt="projet" className="projet-image"/>
            </GridTile>
          </a>
          ))}
        </GridList>
      </div>
      </div>
    </div>
  </Desktop>

  {/* MOBILE Version */}
  <Mobile>
  <div className="row mobile-portfolio">
    <div className="col-md-6 competences">
      <h1>Mes Compétences:</h1>
      <div>
        <Competences />
      </div>
    </div>
    <div className="col-md-6 mobile-grid-list">
      <h1>Quelques Projets:</h1>
      <div>
      <GridList cellHeight={150} style={mobileStyles.gridList}>
        {tilesData.map((tile) => (
          <a href={tile.lien} target="_blank">
          <GridTile key={tile.img} title={tile.title} subtitle={< span > <a className="soustitre" href={tile.lien} target="_blank">voir sur Github</a> < /span>} style={{borderRadius: 30}} titleStyle={styles.titleStyle} titleBackground='rgba(6, 6, 6, 0.86)'>

            <img src={tile.img} alt="projet" className="projet-image"/>
          </GridTile>
        </a>
        ))}
      </GridList>
    </div>
    </div>
  </div>
</Mobile>
  </div>
);

export default GridListPortfolio;
