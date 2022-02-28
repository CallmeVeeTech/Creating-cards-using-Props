import styled from 'styled-components'
const Toptext = () =>{
    return(
        <Container>
            <Wrapper>
                <span>Reliable, efficient delivery</span>
                <Powered>Powered by Technology</Powered>
                <p>Open API Manage your savings, investments, pension, and much                   
                     more from one account.</p>
            </Wrapper>
        </Container>
    )
}
export default Toptext;

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content:center;
text-align: center;
/* line-height: 50px; */
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;

span{
    font-size: 35px;
    color: #aaa
}

p{
    font-size: 20px;
    color: #aaa;
    width: 500px;
}
`
const Powered = styled.div`
font-size: 35px;
font-weight: bold;
margin-bottom: 15px;
`
