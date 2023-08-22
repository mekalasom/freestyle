import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import imageSrc from './selection.png';
import sentenceImg from './sentence.png';
import Selection from "./selection.js";
import SentenceApp from "./sentenceApp.js";
import './style.css';


function App() {
    const selectionAppln = "Selection based AutoGeneration Application ";
    const sentenceAppln = "Simple Sentence based AutoGeneration Application ";

    return (
        <div className="main-appln">
            <Router>
            <Switch>
                <Route exact path="/">
                <div className="title-headings">
                 <h3>Automated Template / workflow Generation</h3></div>
                 <h4>Choose your application </h4>
                     <img src={imageSrc} alt="Image1" className="image" />
                     <Link to = "/dropdown" className="selection"> {selectionAppln}</Link>
                     
                     <img src={sentenceImg} alt="Image2" className="image1" />
                     <Link to = "/applyToRelease" className="selection"> {sentenceAppln}</Link>
                </Route>
                <Route path="/dropdown" component={Selection} />
                <Route path="/applyToRelease" component={SentenceApp} />
            </Switch>
            </Router>
        </div>
    );
}
ReactDOM.render(<App/>, document.querySelector("#root"));
