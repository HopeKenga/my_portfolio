import React from 'react'
import styled from "styled-components"

const Text = styled.h1`
position: fixed;
top: ${props => props.top}
left: ${props => props.left}
right: ${props => props.right}
color: ${props => `rgbaa(${props.thene.textRgba},0.1)`}
font-size: ${props => props.top}
z-index:0;


`

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
        {props.text}
    </Text>
  )
}

export default BigTitle