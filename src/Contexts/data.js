import {createContext, useState} from 'react'

export const DataContext = createContext()

const DataContextProvider = (props) => {

    const[data1, setData1]= useState([
        {title:'Business Analysis',description:'A team of BAs and product scientists take a deep dive into the problem to identify the best solutions.',img:"https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/Biz-dev.png"},
        {title:'Blueprint Design',description:'Our experienced team of UI/UX designers will create a design blueprint completely mapping your project before development begins.',img:"https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/Design.png"},
        {title:'Scrum Methodology',description:'Project teams tailored specifically for each project with a project manager, product owner and developers.',img:"https://www.sovtech.co.za/wp-content/uploads/sites/29/2017/11/Become-a-software-engineer.jpg"},
        
    ])

    const[data2, setData2] = useState([
        {title: 'Keep up to date on our Digital Platform', description: 'Our SovTech Digital Platform is a data-driven solution to the management of your Website Optimization Software development team. A fully transparent productivity application that tracks and manages tasks, messages, commits feedback and code quality. SovTech uses agile frameworks along with the latest scrum methodologies.', img: 'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/sovtech-maintain.svg'},
        {title: 'From design to code to deployment, easily.', description: 'Hire a Website Development team. We strive for 100% client satisfaction along with integrity and transparency. With sprint velocity optimisation guaranteed through planning, design, code, test, deploy and run. We will change out any team member on request.', img: 'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/scrum-methodology.svg'},
        {title: 'Ready To Get Started With Your Web Development?', description: 'No matter where you are in the planning process, our product experts are happy to help you. Our expert web development consultants will discuss your plans and challenges, evaluate your existing web or mobile apps or even make some initial recommendations. We will work with you to ensure your 100% satisfaction.', img: 'https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/start-ups.svg'},
    ])


    const [data3, setData3] = useState([
        {title:"Dedicated Dev Teams", description:"Agile development teams tailored specifically to your project.",img:"https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/11/1.png"},
        {title:"Fixed Time & Price", description:"Your software project delivered on time and on budget.",img:"https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/11/security-01-1.svg"},
        {title:"Product Advance Plans", description:"Choose your package according to the size of the company.",img:"https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/11/2.png"},
    ])
    return ( 
        <DataContext.Provider value={{data}}>
            {props.children}
        </DataContext.Provider>
     );
}
 
export default DataContextProvider;