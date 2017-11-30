import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Responsive from 'react-responsive';
import './stylesheets/Form.css';

//Responsive
const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
const Tablet  = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
const Mobile  = ({ children }) => <Responsive maxWidth={767} children={children} />;

const styles = {
  inputStyle: {color: '#fff'},
  underlineStyle: {borderColor: '#FF4081'},
  floatingLabelStyle: {color: '#fff'},
  floatingLabelFocusStyle: {color: '#FF4081'}
};

const Form = () => (
  <div>
    {/* DESKTOP Version */}
    <Desktop>
      <div className="container-fluid contact">
        <form action="https://formspree.io/faissal.hattou@gmail.com" method="POST">
          <h1 className="contact-title">Mon profil vous plaît ?</h1>
          <TextField type="text" name="nom" className="contact-input" floatingLabelText="Votre nom" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
          <TextField type="email" name="_replyto" className="contact-input" floatingLabelText="Votre adresse mail" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
          <TextField name="message" className="contact-input" floatingLabelText="Votre message" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>

          <FlatButton type="submit" label="Envoyer" secondary={true}/>
        </form>
        <div className="contact-list">
          <div className="contact-list-items">
            <h3>Mes coordonnées :</h3>
          </div>
          <div className="contact-list-items">
            <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
            <h4>+33634161866</h4>
          </div>
          <div className="contact-list-items">
            <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
            <h4>faissal.hattou@gmail.com</h4>
          </div>
        </div>
      </div>
    </Desktop>

    {/* TABLET Version */}
    <Tablet>
      <div className="container-fluid contact">
        <form action="https://formspree.io/faissal.hattou@gmail.com" method="POST">
          <h1 className="tablet-contact-title">Mon profil vous plaît ?</h1>
          <div className="tablet-contact-form">
          <TextField type="text" name="nom" className="contact-input" floatingLabelText="Votre nom" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
          <TextField type="email" name="_replyto" className="contact-input" floatingLabelText="Votre adresse mail" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
          <TextField name="message" className="contact-input" floatingLabelText="Votre message" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
          <FlatButton type="submit" label="Envoyer" secondary={true}/>
        </div>
        </form>
        <div className="tablet-contact-list">
          <div className="tablet-contact-list-items">
            <h3>Mes coordonnées :</h3>
          </div>
          <div className="tablet-contact-list-items">
            <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
            <h3>+33634161866</h3>
          </div>
          <div className="mobile-contact-list-items">
            <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
            <h3>faissal.hattou@gmail.com</h3>
          </div>
        </div>
      </div>
    </Tablet>

    {/* MOBILE Version */}
    <Mobile>
      <div className="container-fluid contact">
        <form action="https://formspree.io/faissal.hattou@gmail.com" method="POST">
          <h1 className="mobile-contact-title">Mon profil vous plaît ?</h1>
          <div className="mobile-contact-form">
          <TextField type="text" name="nom" className="contact-input" floatingLabelText="Votre nom" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
          <TextField type="email" name="_replyto" className="contact-input" floatingLabelText="Votre adresse mail" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
          <TextField name="message" className="contact-input" floatingLabelText="Votre message" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
          <FlatButton type="submit" label="Envoyer" secondary={true}/>
        </div>
        </form>
        <div className="mobile-contact-list">
          <div className="mobile-contact-list-items">
            <h3>Mes coordonnées :</h3>
          </div>
          <div className="mobile-contact-list-items">
            <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
            <h3>+33634161866</h3>
          </div>
          <div className="mobile-contact-list-items">
            <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
            <h3>faissal.hattou@gmail.com</h3>
          </div>
        </div>
      </div>
    </Mobile>
  </div>
);

export default Form;
