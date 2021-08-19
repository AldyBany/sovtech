import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
`

const LeftContent = styled.div``

const RightContent = styled.div``

const TextBox = styled.div``


const ContactForm = () => {
    return ( 
        <Container>
            <LeftContent>
                <TextBox>
                    <h2>Get in touch</h2>
                    <p>Fill out the form below and a dedicated client manager will contact you as soon as possible. For immediate assistance please call our sales number or support line.</p>
                </TextBox>

                <form action="">
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Your Name" required/>
                    </div>

                    <div>
                        <label htmlFor="">Work Email</label>
                        <input type="text" placeholder="name@company.co.za" required/>
                    </div>

                    <div>
                        <label htmlFor="">Mobil Phone Number</label>
                        <input type="number" placeholder="+27" required/>
                    </div>

                    <div>
                        <label htmlFor="">How can we help you? </label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    
                </form>
            </LeftContent>
            <RightContent>
                Head Office
                SovTech,
                1st Floor, Delta Central,
                74 Hillcrest Avenue,
                Blairgowrie, Gauteng,
                South Africa, 2194
                hello@sov.tech
                (+27) 010 865 0161
            </RightContent>
        </Container>
     );
}
 
export default ContactForm;