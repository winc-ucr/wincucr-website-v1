import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@components/global';


class Contact extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      email: "",
      subject:"",
      body:""
    }

    this.setEmail = this.setEmail.bind(this);
    this.setSubject = this.setSubject.bind(this);
    this.setBody = this.setBody.bind(this);
    this.submitContact = this.submitContact.bind(this);
  }

  setEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  setSubject(event){
    this.setState({
      subject:event.target.value
    })
  }

  setBody(event){
    this.setState({
      body:event.target.value
    })
  }

  submitContact(event){
    event.preventDefault();
    
    fetch('http://localhost:3000/contact', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        subject: this.state.subject,
        body: this.state.body
      })
    })
    .then((resp)=>{
      return resp.json()
    })
    .then((data)=>{
      console.log(data)
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  render(){
    return(
      <Section id="contactus">
        <Container>
          <h1 style={{ marginBottom: 40 }}>Contact Us</h1>
          <form style={styles.inputContainer} onSubmit={this.submitContact}>
            <input placeholder="Email" type="text" style={styles.input} value={this.state.email} onChange={this.setEmail}/>
            <input placeholder="Subject" type="text" style={styles.input} value={this.state.subject} onChange={this.setSubject}/>
            <textarea style={styles.inputMessage} value={this.state.body} onChange={this.setBody}></textarea>
            <SubmitButtonContainer>
              <SubmitButton type="submit" id="ContactSubmitButton" value="Submit"/>
            </SubmitButtonContainer>
          </form>
        </Container>
      </Section>
    )
  }

};



const SubmitButton = styled.input`
  border:0px;
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
  
  #ContactSubmitButton:hover{
    cursor:pointer;
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
