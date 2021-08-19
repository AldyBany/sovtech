
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 500px));
    justify-content: space-between;
    align-items: center;
    padding: 60px 50px 40px !important;
`

const ImageBox = styled.div`
    img{
        width: 100%;
        max-width: 500px;
    }
`


const TextBox = styled.div`
    a{
        color: #007bff;
        font-size: 14px;
        font-weight: 500;  
    }
    h2{
        color: #2b3344;
    }
`
const Title = styled.div`
    display: flex;
    align-items: center;
    span{
        margin-left: 10px;
        font-size: 14px;
        color: #007bff;
    }
`

const Clients = () => {
    return ( 
        <Container className="container">
            <ImageBox>
                <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2021/01/UK-Logo.png" alt=""/>
            </ImageBox>
            <TextBox>
                <div className="text">
                    <Title>
                        <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/01/icon12@1x.png" alt=""/>
                        <span>OUR CLIENTS</span>
                    </Title>
                    <h2>A few of our trusted brands</h2>
                    <p>Made up of a dynamic and passionate team of tech enthusiasts we continuously strive to implement the very best software innovations, adapting Silicon Valley technologies to suit our clients’ unique business needs.</p>
                    <a href="" className="">LEARN MORE <i className="fas fa-angle-right"></i></a>
                </div>
            </TextBox>
            </Container>
     );
}
 
export default Clients;