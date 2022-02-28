import React from 'react'
import Card from './Components/card/card'
import Toptext from './Components/Top/toptext'
import styled from 'styled-components'
import pic1 from './img/1.png'
import pic2 from './img/2.svg'
import pic3 from './img/3.jpeg'
import pic4 from './img/4.png'



const  App =()=> {
  return (
    <Container>
      <Toptext/>
      <Wrapper>
      <Card Title="Supervisor" content="Collections Men Women About Contact Sneaker Company Fall Limited Edition Sneakers 
      These low-profile sneakers" img={pic1} border="5px #0051ff solid"/>
      <Card2>
      <Card Title="Team" content="Home Shop About 
      Contact Discover innovative ways to decorate We provide unmatched quality, comfort." img={pic2} border="5px #a80303 solid"/>
      <Card Title="Karma" content="Make each room unique, or pick a cohesive theme that best
       express your interests and what inspires you. " img={pic3} border="5px #e69a28 solid"/>
      </Card2>
      <Card Title="Calculator" content="Shop now About our furniture Our multifunctional 
      collection blends design and function to suit your individual taste." img={pic4} border="5px #0051ff solid"/>
      </Wrapper>
    </Container>
  )
};

export default App;

const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
`
const Card2 = styled.div`
display: flex;
flex-direction: column;
`

