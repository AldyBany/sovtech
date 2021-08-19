import {Link} from 'react-router-dom'
import styled from 'styled-components'


const HeroBanner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px , 1fr));
    justify-content: space-between;
    align-items: top;
    height: calc(100vh - 75px);
    padding: 20px 0;

    @media (max-width: 768px){
        padding: 10px;
        h1{
            font-size: 18px;
        }
        p{
            font-size: 14px;
        }
       
    }

`

const TextBox = styled.div`
    /* grid-column: 1/7; */
    h1{
        font-size: 55px;
        color:  #007bff;
    }
    span{
        color:#2b3344;
    }
    a{
        background-color: #61CE70;
        color: #fff;
    }
    p{
        font-weight: bold;
    }

    @media (max-width: 768px){
        margin-bottom: 10px;
    }
`

const ImageBox = styled.div`
    /* grid-column: 8/12; */
    img{
        float: right;
        max-width: 600px;
        min-width: 300px;
        width: 100%;
        height: 100%;
    }
`

const Banner = () => {
    return ( 
        <HeroBanner className="container">
            <TextBox>
                <h1>
                    <span>Custom Software </span><br/>Development.<br/>Sorted.
                </h1>
                <p>We build better software, faster.Delivering<br/> innovative platforms to startups and <br/> enterprises.</p>

                <Link href="" className="btn fw-5">Contact Us</Link>
            </TextBox>
            <ImageBox>
                <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2021/01/SovTech-software-1024x681.png" alt=""/>
            </ImageBox>
        </HeroBanner>
     );
}
 
export default Banner;