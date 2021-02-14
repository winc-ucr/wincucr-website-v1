import React from 'react';

import { Section, Container } from '@components/global';


const Contact = () => (
  <Section id="contactus">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Contact Us</h1>
      <div style={styles.inputContainer}>
          <input placeholder="Email" type="text" style={styles.input} />
          <input placeholder="Subject" type="text" style={styles.input}/>
          <textarea style={styles.inputMessage}></textarea>
          <button />
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onclick={()=>{console.log("submitted")}}>Submit</button>
      </div>
    </Container>
  </Section>
);

let styles = {
    inputContainer:{
        textAlign: 'center'
    },

    input:{
        display: 'block',
        margin:'auto',
        width: '100%',
        height: 50,
        outline: 0,
        borderWidth: '0 0 2px',
        borderColor:'black'
    },

    inputMessage:{
        marginTop: 30,
        width: '100%',
        height: 200,
        borderWidth: '2px 2px 2px',
        borderColor:'black'
    },

    button:{
        width: 150,
        height: 50,
        borderRadius: 10,
        color:'white',
        textAlign: 'center',
        display:'block',
        margin:'auto',
        padding:10,
        backgroundColor:'#f57567',
    },

    buttonContainer:{
      width: '100%',
      marginTop: 10
    }
}

export default Contact;
