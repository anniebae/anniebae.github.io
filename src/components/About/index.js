import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated } from "react-animated-css";
import { Container } from '../Home'
import AboutBackground from '../../images/bnw.png';



const Background = styled.div`
  background-image: url(${AboutBackground});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  opacity: .3;
`

const Main = styled.div`
  background: rgba(83,119,87,.15);
  border-radius: 4px;
  max-width: 550px;
  font-size: 14px;
  position: absolute;
  padding: 1.5em;
  bottom: 1.5em;
  margin: 0 1.5em;

  @media (min-width: 767px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    margin: 0;
    height: fit-content;
  }
`

const Copy = styled.p`
  margin: 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #537757;
`


class About extends Component {
  render() {
    return(
      <Container>
        <Background></Background>
        <Main>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Copy><span role="img" aria-label="wave">👋</span>, I'm Annie - </Copy>
            <Copy>a New York City based engineer currently <span role="img" aria-label="work">💻</span> at <Link href="https://www.stashinvest.com/" target="_blank">Stash Invest</Link>.</Copy>
            <Copy>I like to <span role="img" aria-label="run">🏃‍♀️</span> (6 half marathons, 1 Ragnar Relay), practice <span role="img" aria-label="yoga">🧘‍♀️</span>, and have a weakness for anything matcha or coffee flavored.</Copy>
            <Copy>In my free <span role="img" aria-label="time">⏰</span>, I like to explore cool new ways to 🔨 sites & apps, take 📸, and drink an unruly amount of ☕️.</Copy>
            <Copy>Most importantly, I'm on a mission to make my <span role="img" aria-label="cat">🐱</span> #instafamous - so go give <Link href="https://www.instagram.com/sunnystillsleeping/" target="_blank">Sunny</Link> a follow.
            </Copy>
            <br/>
            <Copy>Cheers, <span role="img" aria-label="bae">👧</span></Copy>
          </Animated>


        </Main>
      </Container>
    )
  }
}

export default About;