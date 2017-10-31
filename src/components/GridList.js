import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Competences from './Competences';
import Skills from './Skills';
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
const tabletStyles = {
  gridList: {
    width: 450,
    height: 350,
    overflowY: 'auto',
    margin: 'auto',
  },
}

const mobileStyles = {
  gridList: {
    width: 300,
    height: 200,
    overflowY: 'auto',
    margin: 'auto',
  },
}

const tilesData = [
  {img: dino, title: 'API, MongoDB/Express/React/Node', lien: 'https://github.com/Bakhaw/dinosaure-api'},
  {img: salle, title: "Site d'une salle de fitness, Bootstrap", lien: 'https://github.com/Bakhaw/Salle-de-Sport'},
  {img: bootstrapStarter, title: 'Bootstrap template, Bootstrap', lien: 'https://github.com/JovanaBajat/bootstrap-starter'},
  {img: jqueryProjects, title: 'Jquery Mini Projets, Jquery', lien: 'https://github.com/simplonco/jquery-mini-projects'},
  {img: airbnb, title: 'Airbnb, Bootstrap', lien: 'https://github.com/Bakhaw/Airbnb'},
  {img: blogAdmin, title: 'Interface Administrateur, Bootstrap', lien: 'https://github.com/Bakhaw/Projets-titre-pro'}
];

const GridListPortfolio = () => (
  <div className="container-fluid">
    {/* DESKTOP Version */}
    <Desktop>
    <div className="row portfolio">
      <div className="col-md-6 competences">
        <h1>Mes Compétences:</h1>
        <div>
          {/* <Competences /> */}
          <Skills />
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

  {/* TABLET Version */}
  <Tablet>
  <div className="row tablet-portfolio">
    <div className="col-md-6 tablet-competences">
      <div className="col-sm-6">
        <h1>Mes Compétences:</h1>
        {/* <Competences /> */}
        <Skills />
      </div>
      <div className="col-sm-6 tablet-text-competences">
        <p>Au vue de ma formation, j'ai pu découvrir et travailler sur différentes technos. Mes préférences:</p>
        <p>Niveau front-end: je suis particulièrement intéressé par les frameworks JavaScript comme React.</p>
        <p>Pour le back-end: j'ai principalement aimé travaillé avec MongoDB, NodeJS et Express</p>
      </div>
    </div>
    <div className="col-md-6 tablet-grid-list">
      <h1>Quelques Projets:</h1>
      <div>
      <GridList cellHeight={180} style={tabletStyles.gridList}>
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
</Tablet>

  {/* MOBILE Version */}
  <Mobile>
  <div className="row mobile-portfolio">
    <div className="mobile-grid-list">
      <h1>Quelques Projets:</h1>
      <div>
      <GridList cellHeight={160} style={mobileStyles.gridList}>
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

    <div>
      <div>
        {/* <Competences /> */}
        <Skills />
      </div>
    </div>
  </div>
</Mobile>
  </div>
);

export default GridListPortfolio;
