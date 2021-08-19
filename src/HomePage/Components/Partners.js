
import styled from 'styled-components'


const Container = styled.section`
    margin-bottom: 70px;
`
const Title = styled.h4`
    color: #007bff;
    font-size: 14px;
`

const PartnersBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
    justify-content: space-between;
`

const ImageBox = styled.div`

    img{
        width: 100px;
    }
`

const Partners = () => {
    return ( 
        <Container className="text-center  mt-3">
            <Title className="mb-4">TRUSTED BY LEADING COMPANIES</Title>
            <PartnersBox className="container">
                <ImageBox>
                    <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2020/10/Nedbank-IT.png" alt=""/>
                </ImageBox>

                <ImageBox>
                    <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2020/10/Nandos-SovTech-New.png" alt=""/>
                </ImageBox>

                <ImageBox>
                    <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2020/10/Discovery_sovtech.png" alt=""/>
                </ImageBox>

                <ImageBox>
                    <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2020/10/Vodafone-Software.png" alt=""/>
                </ImageBox>

                <ImageBox>
                    <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2020/10/Deloitte-SovTech.png" alt=""/>
                </ImageBox>
            </PartnersBox>
        </Container>
     );
}
 
export default Partners;