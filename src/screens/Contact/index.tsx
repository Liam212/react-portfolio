import React from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar'

const Container = styled.div`
  width: 100%;
  padding: 2em;
  text-align: center;
  box-sizing: border-box;
`

function Contact() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 style={{ color: '#BD9AFF' }}>contact me</h1>
        <h3>Email</h3>
        <a href="mailto:liamstout212@gmail.com">liamstout212@gmail.com</a>
        <h3>Github</h3>
        <a target="_blank" href="https://github.com/Liam212">Liam212</a>
        <h3>Linkedin</h3>
        <a target="_blank" href='https://www.linkedin.com/in/liam-stout-860070232/'>Linkedin</a>
      </Container>
    </div>
  );
}

export default Contact;
