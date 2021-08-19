import styled from 'styled-components'

const FooterBox = styled.footer`
    background-color: #2b3344;
    p{
        color: #7A7A7A;
    }
`


const LinksBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    justify-content: space-around;
    padding: 80px 0 40px;
    border-bottom: 1px solid #ddd;
    /* text-align: center; */
   
`

const Links = styled.div`
    display: flex;
    flex-direction: column;


    h5{
        color: #fff;
    }
    a{
        color: #7A7A7A;
        font-size: 14px;
        font-weight: 500;
        transition: all .3s ;
        &:hover{
            color: #6EC1E4;
        }
    }
`

const Title = styled.h5``

const Footer = () => {
    return ( 
        <FooterBox>
            <LinksBox>
                <Links>
                    <Title>Services</Title>
                    <a href="">Software Engineer</a>
                    <a href="">Developer-as-a-Service</a>
                    <a href="">App Advance</a>
                    <a href="">Cloud Software</a>
                    <a href="">Blockchain Lab</a>
                </Links>

                <Links>
                    <Title>Solutions</Title>
                    <a href="">Software Engineer</a>
                    <a href="">Developer-as-a-Service</a>
                    <a href="">App Advance</a>
                    <a href="">Cloud Software</a>
                    <a href="">Blockchain Lab</a>
                </Links>

                <Links>
                    <Title>Solutions</Title>
                    <a href="">Software Engineer</a>
                    <a href="">Developer-as-a-Service</a>
                    <a href="">App Advance</a>
                    <a href="">Cloud Software</a>
                    <a href="">Blockchain Lab</a>
                </Links>

                <Links>
                    <Title>Clients</Title>
                    <a href="">Software Engineer</a>
                    <a href="">Developer-as-a-Service</a>
                    <a href="">App Advance</a>
                    <a href="">Cloud Software</a>
                    <a href="">Blockchain Lab</a>
                </Links>

                <Links>
                    <Title>About</Title>
                    <a href="">Software Engineer</a>
                    <a href="">Developer-as-a-Service</a>
                    <a href="">App Advance</a>
                    <a href="">Cloud Software</a>
                    <a href="">Blockchain Lab</a>
                </Links>
            </LinksBox>


            <p className="text-center mt-3">Top Software Companies | Software Development Services | Ongoing Tech Support | Software Solutions London UK | Software Maker</p>
            <p className="text-center">© 2012 - 2021 | SovTech</p>
        </FooterBox>


      
     );
}
 
export default Footer;