import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  z-index: 1;
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: #E4E9EC;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  &>*:last-child {
    color: #E4E9EC;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`

const CVButton = styled(motion.a)`
  background-color: #FFB6C1;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;  // Changed to small radius for slight softening of edges
  text-decoration: none;
  font-size: calc(0.4rem + 0.8vw);
  font-weight: 500;
  margin-top: 0.5rem;
  display: inline-block;
  width: fit-content;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hello 👋🏾,</h1>
          <h3>I'm Riziki 🌼.</h3>
          <p>Full Stack Developer with an insatiable appetite for books.<br />Blending innovative coding with immersive storytelling, I craft experiences that resonate.</p>
          <CVButton
            href="https://drive.google.com/file/d/19H-IWgIMNDpa15apTLZD7qIEUZaYN-8I/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            View CV
          </CVButton>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro
