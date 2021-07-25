import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Container } from "@material-ui/core";
import { AuthProvider } from "contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Container maxWidth="xl">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
          </Container>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
