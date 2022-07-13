import React from 'react';
import Navbar from '../NavBar'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 2em;
  text-align: center;
  box-sizing: border-box;
`

const TextContainer = styled.div`
    box-sizing: border-box;
    color: rgb(87, 82, 82);
    text-align: center;
    width: 60%;
    padding: 1em;
    margin: 0 auto;
`

function About() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 style={{ color: '#FF9A9A', marginBottom: '0' }}>about me</h1>
        <TextContainer>
          <p>Hi, my name is Liam.</p>
        </TextContainer>
      </Container>
    </div>
  );
}

export default About;
