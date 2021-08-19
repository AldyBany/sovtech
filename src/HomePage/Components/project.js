import styled from 'styled-components'

const Container = styled.div`
    background-color: #007bff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    padding: 5% 7%;

    h2{
        color:  #6EC1E4;
    }
`

const TextBox = styled.div`
    max-width: 500px;

    .btn{
        background-color: #6EC1E4 !important;
        padding: 12px 24px;
        color: #fff;
        margin-bottom: 20px;
    }
    p{
        font-weight: 500;
        color: #ddd;
    }
`

const ImageBox = styled.div`
    img{
        width: 100%;
        max-width: 470px;
        float: right;
    }
`


const Project = () => {
    return ( 
        <Container>
            <TextBox>
                <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/icon.png" alt=""/>
                <h2 className="mt-3">Manage Your Project On One Platfrom</h2>
                <p  className="mt-4 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe itaque, voluptate ipsa porro temporibus. Hic, quas.</p>
                <a href="" className="btn">GET STARTED <i className="fas fa-angle-right"></i></a>
            </TextBox>

            <ImageBox>
                <img src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/Projects-Labs.png" alt=""/>
            </ImageBox>
        </Container>
     );
}
 
export default Project;