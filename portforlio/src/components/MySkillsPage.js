import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: #93B9B8;
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: #D9C7B2;
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />

        <Main>
          <Title>
            <Design width={40} height={40} /> Frontend Development Wizard
          </Title>
          <Description>
            Passionate about crafting a seamless user experience, I thrive on transforming unique visions into digital reality.
          </Description>
          <Description>
            <strong>Core Skills</strong>
            <ul>
              <li>React , Angular,  Next.JS</li>
              <li>HTML5 & CSS3</li>
              <li>Modern JavaScript (ES6+)</li>
            </ul>
          </Description>
          <Description>
            <strong>Favorite Tools</strong>
            <ul>
              <li>GitHub</li>
              <li>Visual Studio Code</li>
              <li>Figma for UI/UX Design</li>
            </ul>
                    </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> Backend Development Maestro
          </Title>
          <Description>
            With a knack for building robust backends, I ensure your applications run efficiently under the hood.
          </Description>
        <Description>
            <strong>Proficiencies</strong>
            <p>NodeJS, NestJS, Typescript, Python, Serverless Architecture, RESTful APIs, GraphQL, SQL & NoSQL Databases</p>
          </Description>
          <Description>
            <strong>Toolbox</strong>
            <p>Docker, AWS Services, CI/CD Pipelines, and various testing tools.</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage
