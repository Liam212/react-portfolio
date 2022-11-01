import React from 'react'
import Navbar from '../NavBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0em 5em 0em 5em;
  margin-bottom: 2em;
  @media (max-width: 800px) {
    padding: 0em 2em 0em 2em;
  }
  @media (max-width: 655px) {
    display: block;
  }
  @media (max-width: 330px) {
    padding: 0em 1em 1em 1em;
  }
`

const LeftContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  flex-flow: row wrap;
  box-sizing: border-box;
  @media (max-width: 655px) {
    width: 100%;
  }
`

const RightContainer = styled.div`
  margin-left: 1em;
  width: 30%;
  @media (max-width: 655px) {
    width: 100%;
    margin: 0;
  }
`

const Card = styled(Link)`
  border-radius: 4px;
  height: 250px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  text-decoration: none;
  flex: auto;
`

const CardText = styled.h2`
  margin-top: 4.5em;
  @media (max-width: 330px) {
    margin-top: 2.5em;
  }
`

const CardRed = styled.div`
  width: 100%;
  background-color: #ff9a9a;
  margin-bottom: 1em;
  @media (max-width: 655px) {
    width: 100%;
    margin-bottom: 1em;
  }
  @media (max-width: 330px) {
    height: 150px;
  }
`

const CardBlue = styled.a`
  width: 100%;
  background-color: #9ae0ff;
  height: 516px;
  display: flex;
  text-decoration: none;
  @media (max-width: 655px) {
    width: 100%;
    height: 250px;
    margin-bottom: 1em;
  }
  @media (max-width: 330px) {
    height: 150px;
  }
`

const CardOrange = styled.div`
  width: 40%;
  background-color: #ffc59a;
  @media (max-width: 655px) {
    width: 100%;
    margin-bottom: 1em;
  }
  @media (max-width: 330px) {
    height: 150px;
  }
`

const CardPurple = styled.div`
  margin-left: 1%;
  width: 59%;
  background-color: #bd9aff;
  @media (max-width: 655px) {
    width: 100%;
    margin: 0;
    margin-bottom: 1em;
  }
  @media (max-width: 330px) {
    height: 150px;
  }
`

function Home() {
  return (
    <div>
      <Navbar />
      <CardContainer>
        <LeftContainer>
          <CardRed>
            <Card to="/about">
              <CardText>About</CardText>
            </Card>
          </CardRed>
          <CardOrange>
            <Card to="/work">
              <CardText>Work</CardText>
            </Card>
          </CardOrange>
          <CardPurple>
            <Card to="/contact">
              <CardText>Contact</CardText>
            </Card>
          </CardPurple>
        </LeftContainer>
        <RightContainer>
          <CardBlue href="https://github.com/liam212" target="_blank">
            <Card style={{ height: 'inherit' }}>
              <CardText>Github</CardText>
            </Card>
          </CardBlue>
        </RightContainer>
      </CardContainer>
    </div>
  )
}

export default Home
