
import styled from 'styled-components'

const Card = (props)=>{
    return(
        <Container border={props.border}>
            <Wrapper>
                <Title>{props.Title}</Title>
                <Content>{props.content}
                </Content>
                <Icon>
                    <img src={props.img} alt="Search"/> 
                </Icon>
            </Wrapper>
        </Container>
    )
}
export default Card;

const Container = styled.div`
height: 500px;
width: 600px;
/* background: silver; */
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(50,50,93,0.25)0px 13px 27px -5px, rgba(0,0,0,0.3)0px 8px 16px -8px;
border-radius: 8px;
border-top: ${({border})=>border};
margin: 20px;
`
const Wrapper = styled.div`
height: 85%;
width: 85%;
/* background: green; */
display: flex;
flex-direction: column;

`
const Title = styled.div`
font-size: 45px;
font-weight: bold;
margin-bottom: 30px;

`
const Content = styled.span`
font-size: 24px;
width: 85%;
color: #aaa;
margin-bottom: 120px;
`
const Icon = styled.div`
width: 85%;
display: flex;
justify-content: end;
img{
    width: 70px;
}
`

