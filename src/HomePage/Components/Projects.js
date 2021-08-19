import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    h2{
        font-size: 28px;
        margin-bottom: 15px;
    }
    p{
        font-weight: 500;
    }

    a{
        font-size: 13px;
        padding-bottom: 2px;
    }

    @media (max-width: 768px){
        img{
            width: 300px;
        }
    }
`
const Right = styled.div`
    background-color: #ddd;

    a{
        color: #007bff;
        border-bottom: 1px solid #007bff;
    }

    h2{
        color: #2b3344;
    }
`
const Left = styled.div`
     background-color: #007bff;
     h2{
         color: #fff;
     }
     p{
         color: #ddd;
     }
     a{
         
         border-bottom: 1px solid #fff;
     }
`
const RightText = styled.div``
const LeftText = styled.div``

const ImageBox = styled.div`
    text-align: center;

    img{
        width: 500px;
        height: 300px;
    }

    @media (max-width: 768px){
        img{
            width: 400px;
            height: 300px;
            object-fit: contain;
        }
    }
`




const Projects = () => {
    return ( 
        <Container>
            <Left>
                <LeftText className="text-center p-5">
                    <h2>Start-Ups</h2>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque doloremque est perspiciatis necessitatibus numquam. est perspiciatis necessitatibus numquam</p>
                    <a href="" className="">LEARN MORE <i className="fas fa-angle-right"></i></a>
                </LeftText>
                <ImageBox>
                    <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/App-showcase-Ubu.png" alt=""/>
                </ImageBox>
            </Left>
            <Right>
                <RightText className="text-center p-5">
                    <h2>Corporate Projects</h2>
                    <p className="">Big enterprises have relied on us to bring innovative and fresh solutions to the forefront of their problems. We have learnt you can teach old dogs new tricks.</p>
                    <a href="" className="primary ">LEARN MORE <i className="fas fa-angle-right"></i></a>
                </RightText>
                <ImageBox>
                    <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/App-showcase-One54.png" alt=""/>
                </ImageBox>
            </Right>
        </Container>
     );
}
 
export default Projects;