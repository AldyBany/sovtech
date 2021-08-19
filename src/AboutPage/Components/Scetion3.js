import styled from 'styled-components'

const Container = styled.section``
const LeftContent = styled.div`` 
const RightContent = styled.div`` 

const Section3 = () => {
    return ( 
        <Container>
            <LeftContent>
                <h2>Blue Chip Enterprises & VC Startup Clients Across The Globe</h2>

                <p>We help our clients transform and optimise their businesses by delivering exceptional software built by an elite team of passionate tech experts.</p>

                <a href="">View Clients</a>
            </LeftContent>
            <RightContent>
                <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/undraw_connected_world_wuay-1.svg" alt=""/>
            </RightContent>
        </Container>
     );
}
 
export default Section3;