import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import dino from '../images/dino_api.png';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
     }
};

const tilesData = [
  {
    img: dino,
    title: 'Dino API',
    langages: 'MERN stack',
    lien: 'https://github.com/Bakhaw/dinosaure-api',
  },
  {
    img: dino,
    title: 'Dino API',
    langages: 'MERN stack',
    lien: 'https://github.com/Bakhaw/dinosaure-api',
  },
  {
    img: dino,
    title: 'Dino API',
    langages: 'MERN stack',
    lien: 'https://github.com/Bakhaw/dinosaure-api',
  },
  {
    img: dino,
    title: 'Dino API',
    langages: 'MERN stack',
    lien: 'https://github.com/Bakhaw/dinosaure-api',
  },
  {
    img: dino,
    title: 'Dino API',
    langages: 'MERN stack',
    lien: 'https://github.com/Bakhaw/dinosaure-api',
  },
  {
    img: dino,
    title: 'Dino API',
    langages: 'MERN stack',
    lien: 'https://github.com/Bakhaw/dinosaure-api',
  },
];

const GridListPortfolio = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span><a className="soustitre" href={tile.lien} target="_blank">voir sur Github</a></span>}
          titleBackground='rgba(88, 117, 7, 0.3)'
        >

          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListPortfolio;
