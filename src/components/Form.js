import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  inputStyle: {color: '#fff'},
  underlineStyle: {borderColor: '#FF4081'},
  floatingLabelStyle: {color: '#fff'},
  floatingLabelFocusStyle: {color: '#FF4081'}
};

const Form = () => (
  <div className="container-fluid contact">
    <div className="contact-list">
      <div className="contact-list-items">
        <h3>Mes coordonnées :</h3>
      </div>
      <div className="contact-list-items">
        <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
        <h4>0634161866</h4>
      </div>
      <div className="contact-list-items">
        <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
        <h4>faissal.hattou@gmail.com</h4>
      </div>
    </div>
    <div className="contact-form">
      <h1 className="contact-title">Mon profil vous plaît ?</h1>
      <TextField className="contact-input" floatingLabelText="Votre nom" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
      <TextField className="contact-input" floatingLabelText="Votre adresse mail" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>
      <TextField className="contact-input" floatingLabelText="Votre message" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelStyle={styles.floatingLabelStyle} underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle}/>

      <FlatButton label="Envoyer" secondary={true}/>
    </div>
  </div>
);

export default Form;