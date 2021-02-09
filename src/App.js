import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer.js';
import Search from './Search';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
 
function App() {
  return (
    <div className="app"> 
      <Router>

        
        <Header/>
        <Switch>
        <Route path="/search">
            <Search/>
          </Route>
          {/* <SearchPage/> */}
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      
        <Footer />

      </Router>
      
      
      

      {/* {home} */}
        {/* {header} */}
        {/* {banner} */}
        {/* {cards} */}


        {/* {footer} */}
      {/* search page */}
        {/* {...} */}




    </div>
  );
}

export default App;
