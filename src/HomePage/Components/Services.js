import styled from 'styled-components'


const ServicesBox = styled.div`
    @media (max-width: 768px){
        margin-top: 230px;
    }
`

const TextBox = styled.div`
    max-width: 600px;
    margin: 0 auto;
    h2{
        color: #007bff;
    }
`

const CardsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 350px));
    padding: 20px 60px;
    column-gap: 20px;
    row-gap: 20px;
`

const Card = styled.div`
    text-align: center;
    border: 1px solid #6EC1E4;
    padding: 30px 30px 45px;
    border-radius: 3px;
`

const CardImage = styled.div`
    text-align: center;
    margin-bottom: 50px;
    img{
        width: 100px;
    }
    
`

const CardText = styled.div`
    text-align: center;
    h4{
        margin-bottom: 15px;
        font-size: 22px;
    }
    
    p{
        margin: 10px 0 40px;
    }

    a{
        color: #6EC1E4;
        padding: 10px 22px;
        border-radius: 3px;
        border: 1px solid #6EC1E4;
        transition: all .3s;
    }
    i{
        margin-left: 7px;
    }

`


const Services = () => {
    return ( 
        <ServicesBox ClassName="container text-center">
            <TextBox className="text-center">
                <h2 className="h-color">Custom Software Solutions</h2>
                <p>We design, build, deploy and maintain innovative custom software that gives our clients the opportunity to start, run and grow world class businesses.</p>
            </TextBox>
            <CardsBox>
                

                <Card className='shadow'>
                    <CardImage>
                        <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/app-advance.png" alt=""/>
                    </CardImage>
                    <CardText className="text-center">
                        <h4 className="d-color">Custom Development</h4>
                        <p>We build custom innovative web, mobile, blockchain and enterprise software to suit your business needs.</p>
                        <a href="">START A PROJECT <i className="fas fa-angle-right"></i></a>
                    </CardText>
                </Card>

                <Card className='shadow'>
                    <CardImage>
                        <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/dev-teams.png" alt=""/>
                    </CardImage>
                    <CardText>
                        <h4 className="d-color">Agile Scrum Teams</h4>
                        <p className="text-center">Hire full stack software agile scrum development teams. Full software teams, globally on-demand.</p>
                        <a href="">HIRE A DEV TEAM <i className="fas fa-angle-right"></i></a>
                    </CardText>
                </Card>

                <Card className='shadow'>
                    <CardImage>
                        <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/custom-app.png" alt=""/>
                    </CardImage>
                    <CardText>
                        <h4 className="d-color">App Management</h4>
                        <p className="text-center">Continuous application improvement through optimisation, devops and infrastructure maintenance.</p>
                        <a href="">GET SUPPORT <i className="fas fa-angle-right"></i></a>
                    </CardText>
                </Card>
            </CardsBox>

            <p className="text-center">You think we don't have it?</p>
        </ServicesBox>
     );
}
 
export default Services;