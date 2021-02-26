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
          <ContactForm onSubmit={this.submitContact}>
            <ContactInput placeholder="Email" type="email" value={this.state.email} onChange={this.setEmail} required/>
            <ContactInput placeholder="Subject" type="text" value={this.state.subject} onChange={this.setSubject} required/>
            <ContactInputTextArea value={this.state.body} onChange={this.setBody} required></ContactInputTextArea>
            <SubmitButtonContainer>
              <SubmitButton type="submit" id="ContactSubmitButton" value="Submit"/>
            </SubmitButtonContainer>
          </ContactForm>
        </Container>
      </Section>
    )
  }
};


const SubmitButton = styled.input`
  border: 0px;
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
`;

const ContactForm = styled.form`
  textAlign: center;
`;

const ContactInput = styled.input`
  display: block;
  margin:auto;
  width: 100%;
  height: 50px;
  outline: 0;
  border-width: 0px 0px 2px;
  border-color: black;
  
`;

const ContactInputTextArea = styled.textarea`
  margin-top: 30px;
  width: 100%;
  height: 200px;
  border-width: 2px 2px 2px;
  border-radius: 5px;
  outline: none;
  border-color: black;
`;

export default Contact;
