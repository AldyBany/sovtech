import styled from 'styled-components'
import {useState} from 'react'


const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px 1fr));
    gap: 40px;
`
const Card = styled.div`
    height: 250px;
    padding: 20px 30px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,.1);
`
const Section1 = () => {

    const[data, setData] = useState([
        {title: 'We Design Progressive Web Apps', description:"Our design experts research, design, plan and architect beautiful UI/UX blueprints for world-class applications."},
        {title: 'We Develop Progressive Web Apps', description:"Leading software engineers ready to build, code and develop scalable frontend and backend systems for your web apps."},
        {title: 'We Deploy Progressive Web Apps', description:"Quality assurance (QA) on your software ensures your software is running optimally via implementation, deploy-testing and reliability tools."},
        {title: 'We Run Progressive Web Apps', description:"Once your app has launched we host, manage, scale, support, optimize and continuously improve your platforms."},
    ])
    return ( 
        <Container>
            {
                data.map((datum,index)=>{
                    return <Card key={index}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </Card>
                })
            }
        </Container>
    );
}
 
export default Section1;