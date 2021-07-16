import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from "./pages/home";
import {About} from "./pages/about";
import {Container} from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <Container maxWidth="xl">
                <Router>
                    <div>
                        <Navbar/>
                        <hr/>
                        <Route exact path='/' component={Home}/>
                        <Route path='/About' component={About}/>
                    </div>
                </Router>
            </Container>
        </div>
    );
}

export default App;
