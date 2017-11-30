import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Responsive from 'react-responsive';
// import Competences from '../../Competences'; // plus besoin pr l'instant
import Skills from '../../Skills';
// Import des img projets
import dino from '../../../images/dino_api.png';
import salle from '../../../images/salle.png';
import bootstrapStarter from '../../../images/bootstrap_starter.png';
import jqueryProjects from '../../../images/meme.png';
import airbnb from '../../../images/airbnb.png';
import blogAdmin from '../../../images/B-Admin_2.png';
// Import css
import '../../stylesheets/GridList.css';

//Responsive
const Mobile  = ({ children }) => <Responsive maxWidth={767} children={children} />;

const mobileStyles = {
  gridList: {
    width: 300,
    height: 200,
    overflowY: 'auto',
    margin: 'auto',
  },
  titleStyle: {
    color: 'rgb(217, 216, 204)',
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

const MobilePortfolio = () => (
  <div className="container-fluid">
  <Mobile>
  <div className="row mobile-portfolio">
    <div className="mobile-grid-list">
      <h1>Quelques Projets:</h1>
      <div>
      <GridList cellHeight={160} style={mobileStyles.gridList}>
        {tilesData.map((tile) => (
          <a href={tile.lien} target="_blank">
          <GridTile key={tile.img} title={tile.title} subtitle={< span > <a className="soustitre" href={tile.lien} target="_blank">voir sur Github</a> < /span>} style={{borderRadius: 30}} titleStyle={mobileStyles.titleStyle} titleBackground='rgba(6, 6, 6, 0.86)'>
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

export default MobilePortfolio;
