import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from "./pages/home";
import {About} from "./pages/about";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Navbar/>
                    <hr/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/About' component={About}/>
                </div>
            </Router>
        </div>
  );
}

export default App;
