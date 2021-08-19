import styled from 'styled-components'


const Container = styled.div``

const OfficeBox = styled.div``
const Card = styled.div``

const ImageBox = styled.div``

const Offices = () => {
    return ( 
        <Container>
            <h2>Offices</h2>
            <OfficeBox>
                <Card>
                    <ImageBox>
                        <img src="" alt=""/>
                    </ImageBox>
                    <h4>Joburg</h4>
                    <p>010 865 0161 Hillcrest, Blairgowrie, 2194</p>
                </Card>

                <Card>
                    <ImageBox>
                        <img src="" alt=""/>
                    </ImageBox>
                    <h4>Joburg</h4>
                    <p>010 865 0161 Hillcrest, Blairgowrie, 2194</p>
                </Card>

                <Card>
                    <ImageBox>
                        <img src="" alt=""/>
                    </ImageBox>
                    <h4>Joburg</h4>
                    <p>010 865 0161 Hillcrest, Blairgowrie, 2194</p>
                </Card>

                <Card>
                    <ImageBox>
                        <img src="" alt=""/>
                    </ImageBox>
                    <h4>Joburg</h4>
                    <p>010 865 0161 Hillcrest, Blairgowrie, 2194</p>
                </Card>
            </OfficeBox>

        </Container>
     );
}
 
export default Offices;