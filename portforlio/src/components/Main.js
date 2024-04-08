import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Young from '../assets/Images/Young.png'

import Intro from './Intro';
import ParticleComponent from '../subComponents/ParticleComponent';


// Define your page-specific colors
const pageBodyColor = '#287686'; // Example color for the body



const MainContainer = styled.div`
  background: ${pageBodyColor};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: #E4E9EC;
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: #E4E9EC;
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: #E4E9EC;

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
color: #E4E9EC;
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: #E4E9EC;
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: #E4E9EC;
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' :'50%'};
  left: ${props => props.click ? '92%' :'50%'};
  transform: translate(-50%,-50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  z-index: 2; 

  &>:first-child{
    animation: ${rotate} infinite 1.5s linear;
  }

  &:last-child {
    display: ${({ click }) => click ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }
`


const DarkDiv = styled.div`
color: #E4E9EC;
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
z-index:1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`


const ImageContainer = styled.div`
  position: absolute; 
  left: 15%; 
  top: 30%; 
  width: 25vw; 
  height: 105vh; 
  background-image: url(${Young});
  background-size: cover;
  background-position: center;
  transform: translate(0, 0); 
`;

const MotionImageContainer = motion(ImageContainer);

const Main = () => {
    const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <MotionImageContainer
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' :'light'}/>
        <SocialIcons theme={click ? 'dark' :'light'} />

      <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
        <span>click here</span>
      </Center>

        <Contact target="_blank" href="mailto:kengahope7@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

          >
            Say hi..
          </motion.h2>
        </Contact>
        <BLOG to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG>
        <WORK to="/work" click={+click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" click={+click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </SKILLS>

        </BottomBar>
        <ParticleComponent theme='dark' />

      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main
