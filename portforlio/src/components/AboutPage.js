import React from 'react'
import styled, {keyframes, ThemeProvider} from 'styled-components'
import {DarkTheme} from './Theme'



import astronaut from '../assets/Images/spaceman.png'


const Box = styled.div `
background-color: ${props => props.theme.body}
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;`

const float = keyframes `
0% {transform: translateY(-10px) }
50% {transform: translatey(15PX) translateX(15px)}
100% {transform: translatey(-10px)}

`

const Spaceman = styled.div `
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float}
img{
    width: 100%;
    height: auto;
}

`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`





const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
        <Box>
            <LogoComponent theme='dark' />
            <SocialIcons theme='dark' />
            <PowerButton />
            <ParticleComponent theme='dark' />

            <Spaceman>
                <img src={astronaut} alt="spaceman" />
            </Spaceman>
            <Main>
                Lorem
                <br></br>
                Ipsum
                <br></br>
                Dorem
            </Main>

            <BigTitle text="ABOUT"  top="10%" left="5%" />
         </Box>
         
    </ThemeProvider>
  )
}

export default AboutPage