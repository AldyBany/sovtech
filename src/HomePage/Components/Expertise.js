
import styled from 'styled-components'


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    padding-top: 40px;
    padding-bottom: 60px;
    a{
        background-color: #007bff;
        color: #fff;
        /* font-size: 14px; */
        font-weight: 500;  
    }

`


const RightContent = styled.div`
    float: right;
    width: 500px;
    display: grid;
    h4{
        color: #2b3344;
    }

`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const Title = styled.p`
    color:  #007bff;
    display: flex;
    align-items: center;
`
const LeftContent = styled.div`
    width: 500px;
    h3{
        color: #2b3344;
    }
    
`

const Expertise = () => {
    return ( 

        <Container className="container">
            <LeftContent>
                <Title>
                    <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/01/icon12@1x.png" alt=""/>
                    <span>OUR SERVICES</span>
                    
                </Title>
                <h3>We provide custom packages to our clients in order to suit their budgets and timelines.</h3>
                <p>Here are some of the services and capabilities we have to offer our various clients.</p>
                <a className="btn">Contact Us</a>
            </LeftContent>
            <RightContent className="shadow">
                <Wrapper className="mb-3">
                    <div>
                        <h4>Services</h4>  
                        <li>Mobile Applications</li>
                        <li>Web Applications</li>
                        <li>Blockchain</li>
                        <li>Design and Prototyping</li>
                        <li>Development Teams</li>
                        <li>Cloud Software</li>
                        <li>Maintenance Plans</li>
                    </div>

                    <div>
                        <h4>Packages</h4>
                        <li>Minimum Viable Product</li>
                        <li>Start-Up</li>
                        <li>Business</li>
                        <li>Corporate</li>
                        <li>Custom</li>      
                    </div>
                </Wrapper>   
                
                        
                <a className="btn">SEE MORE</a>
            </RightContent>
        </Container>
     );
}
 
export default Expertise;