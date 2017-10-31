import React, {Component} from 'react';
import photo from '../images/me.jpg';
import Responsive from 'react-responsive';
import './stylesheets/Home.css';

const linkedin = 'https://www.linkedin.com/in/faissal-hattou-9868b5144/';
const github = 'https://github.com/Bakhaw';
const simplon = 'https://simplon.co/';

// RESPONSIVE

const Desktop = ({children}) => <Responsive minWidth={992} children={children}/>;
const Tablet = ({children}) => <Responsive minWidth={768} maxWidth={992} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={767} children={children}/>;
const Default = ({children}) => <Responsive minWidth={768} children={children}/>;

class Home extends Component {

  render() {
    return (
      <div>
      {/* // DESKTOP Version */}
    <Desktop>
      <div className="container-fluid home">
        <div className="col-md-4">
          <img src={photo} id="photo" alt="moi"/>
          <h1>Faïssal Hattou</h1>
          <h3>Développeur Fullstack JS</h3>
          <h3>Ile-de-France</h3>
          <a href={linkedin} target="_blank">
            <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
          </a>
          <a href={github} target="_blank">
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-6 presentation">
          <div>
            <p>Bienvenu à vous !</p>
          </div>
          <div>
            <p>
              Je suis Faïssal Hattou, étudiant en développement web à
              <a className="simplon" href={simplon} target="_blank">Simplon.co
              </a>
              depuis mai 2017. J'aurai fini ma formation le 10 janvier 2018, et j'aimerais poursuivre mon apprentissage.
            </p>
            <p>
              Je recherche donc un employeur avec qui signer un contrat de professionnalisation à partir de février 2018.
            </p>
          </div>
        </div>
      </div>
    </Desktop>

    {/* // TABLET Version */}
  <Tablet>
    <div className="container-fluid tablet-home">
      <div className="col-md-4">
        <img src={photo} id="photo" alt="moi"/>
        <h1>Faïssal Hattou</h1>
        <h3>Développeur Fullstack JS</h3>
        <h3>Ile-de-France</h3>
        <a href={linkedin} target="_blank">
          <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
        </a>
        <a href={github} target="_blank">
          <i className="fa fa-github fa-3x" aria-hidden="true"></i>
        </a>
      </div>
      <div className="col-md-6 presentation">
        <div>
          <p>Bienvenu à vous !</p>
        </div>
        <div>
          <p>
            Je suis Faïssal Hattou, étudiant en développement web à
            <a className="simplon" href={simplon} target="_blank">Simplon.co
            </a>
            depuis mai 2017. J'aurai fini ma formation le 10 janvier 2018, et j'aimerais poursuivre mon apprentissage.
          </p>
          <p>
            Je recherche donc un employeur avec qui signer un contrat de professionnalisation à partir de février 2018.
          </p>
        </div>
      </div>
    </div>
  </Tablet>

    {/* // MOBILE Version */}

    <Mobile>
      <div className="container-fluid mobile-home">
        <div className="col-md-4">
          <img src={photo} id="photo" alt="moi"/>
          <h1>Faïssal Hattou</h1>
          <h3>Développeur Fullstack JS</h3>
          <h3>Ile-de-France</h3>
          <a href={linkedin} target="_blank">
            <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
          </a>
          <a href={github} target="_blank">
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-6 presentation">
          <div>
            <p>Bienvenu à vous !</p>
          </div>
          <div>
            <p>
              Je suis Faïssal Hattou, étudiant en développement web à
              <a className="simplon" href={simplon} target="_blank"> Simplon.co </a>
              depuis mai 2017. J'aurai fini ma formation le 10 janvier 2018, et j'aimerais poursuivre mon apprentissage.
            </p>
            <p>
              Je recherche donc un employeur avec qui signer un contrat de professionnalisation à partir de février 2018.
            </p>
          </div>
        </div>
      </div>
    </Mobile>
  </div>
  );
  }

}

export default Home;
