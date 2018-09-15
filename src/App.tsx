import * as React from "react";
import "./App.css";
import intro from "./images/intro.png";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <img src={intro} className="App-intro" alt={intro}/>
                <div className="enter-button">
                    <button className="btn enter-world">Enter World<i className="glyphicon glyphicon-arrow-right arrow"/></button>
                </div>
            </div>
        );
    }
}

export default App;
