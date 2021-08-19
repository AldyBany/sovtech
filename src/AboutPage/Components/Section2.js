import styled from 'styled-components'

const Container = styled.section``
const Title = styled.div``
const ParagraphBox = styled.div``
const Paragraph = styled.div``

const Section2 = () => {
    return ( 
        <Container>
            <Title>
                <h2>Hello, We Are SovTech</h2>
            </Title>
            <ParagraphBox>
                <Paragraph>
                    <p>
                    SovTech is a custom software development company providing a complete software design and development service. SovTech delivers the best in class custom software solutions, elite software development teams and innovative cloud software to enterprise business across numerous industries.
                    </p>
                </Paragraph>
                <Paragraph>
                    <p>
                    We believe new technologies are the lifeline of every business in the modern age and aim to connect businesses across all industries to innovative software, technological development, solutions and services, in a manner that’s faster, easier and better than ever before.
                    </p>
                </Paragraph>
            </ParagraphBox>
        </Container>
     );
}
 
export default Section2;