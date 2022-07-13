import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import useMinWidth from '../hooks/useMinWidth'

const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 2em 5em 2em 5em;
  @media (max-width: 800px) {
    padding: 2em;
  }
`

const NavTitle = styled.h1`
  font-weight: bold;
  color: black;
  text-decoration: none;
`

const NavLinks = styled.div`
  justify-content: flex-end;
  display: flex;
  align-self: center;
  width: 50%;
  @media (max-width: 585px) {
    justify-content: flex-end;
    display: flex;
    align-self: center;
    width: 50%;
    margin-bottom: 0.8em;
  }
`

const Drawer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 8em;
  right: 0;
  background-color: white;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0em 2em 2em 2em;
  box-sizing: border-box;
  @media (max-width: 330px) {
    top: 6em;
    padding: 0em 1em 2em 1em;
  }
`

const NavItem = styled.div`
  margin: 0em 0em 0em 1em;
`

const NavItemLink = styled(NavLink)`
  color: #a8a8a8;
  text-decoration: none;
`

const Menu = styled.div`
  text-decoration: none;
  font-size: 3em;
  color: black;
`

function Navbar() {
    const isAboveTablet = useMinWidth(768)

    const dropMenu = () => {
        const el = document.getElementById('draw')
        el.style.display = el.style.display === 'block' ? 'none' : 'block'
    }
    return (
        <Container>
            <NavLink style={{ width: '50%' }} to="/">
                <NavTitle>Liam Stout</NavTitle>
            </NavLink>
            {isAboveTablet ? (
                <NavLinks>
                    <NavItem>
                        <NavItemLink exact to="/" activeStyle={{ color: 'black' }}>
                            <h3>Home</h3>
                        </NavItemLink>
                    </NavItem>
                    <NavItem>
                        <NavItemLink exact to="/about" activeStyle={{ color: 'black' }}>
                            <h3>About</h3>
                        </NavItemLink>
                    </NavItem>
                    <NavItem>
                        <NavItemLink exact to="/work" activeStyle={{ color: 'black' }}>
                            <h3>Work</h3>
                        </NavItemLink>
                    </NavItem>
                    <NavItem>
                        <NavItemLink exact to="/contact" activeStyle={{ color: 'black' }}>
                            <h3>Contact</h3>
                        </NavItemLink>
                    </NavItem>
                </NavLinks>
            ) : (
                <NavLinks>
                    <Menu href="#" onClick={() => dropMenu()}>
                        <span>≡</span>
                    </Menu>
                    <Drawer style={{ display: 'none' }} id="draw">
                        <div style={{ paddingLeft: '0px' }}>
                            <NavLink exact to="/" activeStyle={{ color: 'black' }}>
                                <h3>Home</h3>
                            </NavLink>
                        </div>
                        <div style={{ paddingLeft: '0px' }}>
                            <NavLink exact to="/about" activeStyle={{ color: 'black' }}>
                                <h3>About</h3>
                            </NavLink>
                        </div>
                        <div style={{ paddingLeft: '0px' }}>
                            <NavLink exact to="/work" activeStyle={{ color: 'black' }}>
                                <h3>Work</h3>
                            </NavLink>
                        </div>
                        <div style={{ paddingLeft: '0px' }}>
                            <NavLink exact to="/contact" activeStyle={{ color: 'black' }}>
                                <h3>Contact</h3>
                            </NavLink>
                        </div>
                    </Drawer>
                </NavLinks>
            )}
        </Container>
    )
}

export default Navbar
