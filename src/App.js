
import Navbar from "./Navbar";
import Footer from "./Footer";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./HomePage/Home";
import Contact from "./Contact";
import GlobalStyle from "./GlobalStyle";
import Services from "./ServicesPage/Services";


function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <div className="app-content">
          {/* <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          
          </Switch> */}
          <Home/>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
