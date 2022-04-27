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
        div / >
        <
        FontAwesomeIcon icon = {
            ['fab', 'facebook-square'] }
        /> <
        div / >
        <
        FontAwesomeIcon icon = {
            ['fab', 'instagram-square'] }
        /> <
        div / >
        <
        FontAwesomeIcon icon = {
            ['fab', 'linkedin'] }
        /> <
        div / >
        <
        FontAwesomeIcon icon = {
            ['fab', 'twitter'] }
        /> <
        div / >
        <
        FontAwesomeIcon icon = {
            ['fab', 'google'] }
        /> <
        div / >
        <
        FontAwesomeIcon icon = {
            ['fab', 'youtube'] }
        /> <
        div / >
        <
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