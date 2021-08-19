import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

const Nav = styled.div`
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 15px 30px;
    position: relative;


`
const Left = styled.div``
const Logo = styled.div`
    h2{
        color: #007bff;
    }
`
const Links = styled.div`
    a{
        color: #333;
        padding: 0 20px;
        transition: all .3s;
        &:hover{
            color: #61CE70;
        }
    }
    button{
        background-color: #61CE70 !important;
        color: #fff;
    }
    @media (max-width: 768px){
        position: absolute;
        top: 75px;
        left: ${({isOpen}) => (isOpen?'0':'-100%')};
        /* right: 0; */
        width: 100%;
        height: 40vh;
        padding: 20px;
        display: flex;
        flex-direction: column;
        background-color:  #007bff;
        transition: left .3s ease;
        a{
            color: #fff;
        }
    }
`

const Hamburger = styled.div`
    cursor: pointer;
    font-size: 20px;
    display: none;

    @media (max-width: 768px){
        display: flex;
    }
`

const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false)
    return ( 
        <Nav>
            <Left>
                <Logo>
                    <h2>AlTech</h2>
                </Logo>
            </Left>

            <Links isOpen={isOpen}>
                <Link to="">Services</Link>
                <Link to="">Solutions</Link>
                <Link to="">Clients</Link>
                <Link to="">Blog</Link>
                <Link to="">About Us</Link>
                <Link to="">Contact</Link>
                <button className="btn">Start A Project</button>
            </Links>

            <Hamburger onClick={()=>setIsOpen(!isOpen)}>
                    <i class='bx bx-menu'></i>
            </Hamburger>
        </Nav>
     );
}
 
export default Navbar;