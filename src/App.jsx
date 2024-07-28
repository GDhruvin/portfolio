import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Navbar from './Navbar';
import Skill from './Skill';
import About from './About';
import Qualification from './Qualification';
import { Redirect, Route, Switch } from "react-router-dom";
import Hr from "./Hr";




const App = () => {

    

    return (
        <>
            <Navbar />
            <Hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skill" component={Skill} />
                <Route exact path="/qualification" component={Qualification} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;

