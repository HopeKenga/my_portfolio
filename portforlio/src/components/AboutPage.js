import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import cosmonaut from '../assets/Images/cosmonaut.png'

const Box = styled.div`
background-color: #287686;
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 40%; 
left: 70%; 
transform: translate(-50%, -50%); 
width: 20vw;
animation: ${float} 4s ease infinite;
img {
    width: 100%;
    height: auto;
}
`

const Main =  styled.div`
  border: white solid;
  color: white;
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

<LogoComponent theme='light'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={cosmonaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        I started out as  Backend Developer, so we can say I have a knack for backend development. This solid foundation has fueled my transition to full-stack development,
        <br/>
        <br /> where I now thrive in orchestrating the entire spectrum of web application development—from database operations to user interfaces.
<br /> <br/>
I'm interested in Software Engineering as a whole, if I could I'd dive deep into Assembly and start from the bottom up🚀
<br/> <br/>
I'm a firm beliver of `As we are - So the world is🧶`. 
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
