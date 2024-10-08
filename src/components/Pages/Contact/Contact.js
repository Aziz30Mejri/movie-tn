import React from 'react';
import './Contact.css';
import Header from '../../Header';

const Contact = () => {
  return (
    <div><Header/>
    <div class="containers" style={{marginTop: "40px"}}>
    <h1>Formulaire de contact</h1>
    <form action="/action_page.php">
      <label for="fname">Nom & prénom</label>
      <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom" />  
      <label for="sujet">Sujet</label>
      <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message" />
      <label for="emailAddress">Email</label>
      <input id="emailAddress" type="email" name="email" placeholder="Votre email" />
      <label for="subject">Message</label>
      <textarea id="subject" name="subject" placeholder="Votre message" style={{height:"100px"}}></textarea>  
      <input type="submit" value="Envoyer"/>
    </form>
  </div>
  </div>
  );
}

export default Contact;
