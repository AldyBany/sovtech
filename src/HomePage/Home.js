import Partners from "./Components/Partners";
import Project from "./Components/project";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Why from "./Components/Why";
import DropMenu from "../DropMenu";
import Banner from "./Components/Banner";
import Clients from "./Components/Clients";
import Expertise from "./Components/Expertise";



const Home = () => {
    return ( 
        <div className="home-page">
            <Banner/>
            <Partners/>
            <Services/>
            <Project/>
            <Why/>
            <Projects/>
            <Clients/>
            <Expertise/>
            
        </div>
     );
}
 
export default Home;