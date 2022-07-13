import React from 'react'
import Navbar from '../NavBar'
import projects from './projects'
import styled from 'styled-components'

const logos = {
  react: require('../../assets/img/react.svg'),
  node: require('../../assets/img/node.png'),
  python: require('../../assets/img/python.png'),
  html: require('../../assets/img/html.png'),
  firebase: require('../../assets/img/firebase.png'),
}

const Container = styled.div`
  width: 100%;
  padding: 2em;
  text-align: center;
  box-sizing: border-box;
  @media (max-width: 650px) {
    padding: 0.5em;
  }
`

const WorkCard = styled.div`
  width: 60%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  margin: 1em;
  padding: 1em;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  margin-top: 1em;
  @media (max-width: 650px) {
    width: 100%;
  }
`

const WorkCardTitle = styled.h3`
  width: 100%;
  margin: 0;
  text-align: left;
  margin-bottom: 0.2em;
`

const WorkCardText = styled.p`
  color: #575252;
  margin-top: 0.2em;
  width: 100%;
  margin: 0;
  text-align: left;
`

const WorkCardButtons = styled.a`
  margin-left: 0.3em;
  margin-top: 0.3em;
  background-color: rgb(255, 197, 154);
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 4px;
`

function Work() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 style={{ color: '#FFC59A' }}>my work</h1>
        {projects.projects.map(project => {
          return (
            <WorkCard>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <WorkCardTitle>{project.name}</WorkCardTitle>
                {project.tech.map(url => {
                  return (
                    <img
                      style={{ marginLeft: '.3em', paddingBottom: '.3em' }}
                      src={logos[url]}
                      alt={'Tech'}
                      height={20}
                    />
                  )
                })}
              </div>
              <WorkCardText>{project.description}</WorkCardText>
              {project.live ? (
                <WorkCardButtons target="_blank" href={project.live}>
                  Live Version
                </WorkCardButtons>
              ) : (
                <></>
              )}
              {project.source ? (
                <WorkCardButtons target="_blank" href={project.source}>
                  Source Code
                </WorkCardButtons>
              ) : (
                <WorkCardButtons
                  style={{ backgroundColor: '#FF9A9A' }}
                  href="#"
                >
                  Private Repo
                </WorkCardButtons>
              )}
            </WorkCard>
          )
        })}
      </Container>
    </div>
  )
}

export default Work
