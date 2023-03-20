import React from 'react'

/* created a re-useable NavbarLinks and Buttons function in react fashion */

const NavbarLinks = () => {
    return(
    <>
            <a href="#home">Home</a>
            <a href="#wgpt3">What is GPT3</a>
            <a href="#possibility">Open AI</a>
            <a href="#featurs">Case Studies</a>
            <a href="#blog">Library</a>
    </>
    )
  }


  const NavbarButtons = () =>{
    return(
    <>
            <a href="#sign in">Sign In</a>
            <button type='button'>Sign Up</button>
    </>
    )
  }
  export  {NavbarLinks,NavbarButtons}