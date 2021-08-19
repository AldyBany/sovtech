import {useState} from 'react'

import styled from 'styled-components'


const Container = styled.div`
 
    padding-top: 60px;
    padding-bottom: 70px;
    text-align: center;
`
const Text = styled.div`
    margin-bottom: 50px;
`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
    justify-content: center;
    row-gap: 30px;
    img{
        width: 55px;
    }
    h4{
        font-size: 16px;
    }
    .accordion{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px){
        grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    }
`

const Why = () => {

    const [data, setData] = useState([
        {title:'Dedicated Teams', body:'Your project is worked on by a dedicated team of motivated developers.', img:'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/devlopment-teams.svg', id:1},
        {title:'Project Delivery', body:'Ensure successful project delivery with your personal SovTech product lead.', img:'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/projects.svg', id:2},
        {title:'Industry Experience', body:'Diverse industry experience brought to each of your projects.', img:'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/software-advance-ops.svg', id:3},
        {title:'Global Deployments', body:"Deploy your product locally in your business's city or globally.", img:'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/rocket.svg', id:4},
        {title:'Product Innovation', body:'Cutting-edge innovation in AI, IOT, AR/VR, Blockchain, SaaS, ML and Cloud.', img:'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/software-code.svg', id:5},
        {title:'Transparent Service', body:'Track and manage your project open and continuous communication.', img:'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/thumbs-up.svg', id:6}
    ])

    const[show, setShow] = useState(false);

    return ( 
        <Container className="container">
            <Text className='text-center'>
                <h2>Why SovTech?</h2>
                <p className="text-center">Great custom software development is the perfect combination of artistry, engineering, and people. Made up of a dynamic and passionate team of tech enthusiasts with elite software development expertise, we continuously strive to deliver the very best software solutions, innovating with the latest technologies and cloud software to suit each clients unique business needs.</p>
            </Text>
            <Content>
                {
                    data.map((datum)=>{
                        const{title, body,img, id} = datum;
                        return(
                            <div key={id} className="accordion">
                                <img src={img}/>
                                <div className="accordion-text">
                                    <h4 onClick={()=>setShow(!show)}>{title}</h4>
                                    {show && <p>{body}</p>}
                                </div>
                            </div>
                        )
                    })
                }
                
            </Content>
        </Container>
     );
}
 
export default Why;