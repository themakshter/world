import * as React from "react";
import "./App.css";
import logo from "./images/world-logo.png";

class App extends React.Component {
    public render() {
    return (
    <div className="App">
    <img src={logo} className="App-logo" alt={logo}/>
    <div className="enter-button">
    <button className="btn enter-world">Enter World
        <i className="glyphicon glyphicon-arrow-right arrow"/></button>
    </div>
    </div>
);
}
}

export default App;
