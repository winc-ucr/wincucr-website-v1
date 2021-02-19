import React from 'react';

import styled from 'styled-components';
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
      <SubmitButtonContainer>
        <SubmitButton onclick={()=>{console.log("submitted")}}>Submit</SubmitButton>
      </SubmitButtonContainer>
    </Container>
  </Section>
);

const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color: white;
  textAlign: center;
  display: block;
  margin: auto;
  padding: 10px;
  background-color: ${props => props.theme.color.primary};
  transition: background-color .3s ease-in;
`;

const SubmitButtonContainer = styled.div`
  margin-top: 10px;
  
  button:hover{
    background-color:black;
    background-color: #d16256;
    transition: background-color .3s ease-in;
  }
`

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
        borderRadius: 5,
        outline: 'none',
        borderColor:'black'
    },
}

export default Contact;
