import React from 'react'
import ReactDOM from 'react-dom'
import 'src/components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function About() {
    return ( <
        section id = "about" >
        <
        div class = "container" >
        <
        div class = "strips" >
        <
        div class = "s-one" > < /div> <
        div class = "s-two" > < /div> <
        div class = "s-three" > < /div> <
        /div> <
        div class = "top-bar" >
        <
        ul >
        <
        li >
        <
        div class = "account" >
        <
        div style = {
            { fontSize: '35px' } } >
        <
        FontAwesomeIcon icon = "user" / >
        <
        FontAwesomeIcon icon = {
            ['fab', 'facebook-square'] }
        /> <
        FontAwesomeIcon icon = {
            ['fab', 'instagram-square'] }
        /> <
        FontAwesomeIcon icon = {
            ['fab', 'linkedin'] }
        /> <
        FontAwesomeIcon icon = {
            ['fab', 'twitter'] }
        /> <
        FontAwesomeIcon icon = {
            ['fab', 'google'] }
        /> <
        FontAwesomeIcon icon = {
            ['fab', 'youtube'] }
        /> <
        FontAwesomeIcon icon = {
            ['fab', 'skype'] }
        /> <
        /div>

        <
        /div> <
        /li> <
        /ul>

        <
        /div> <
        /div> <
        /section>

    );
};