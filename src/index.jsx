import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component{

constructor() {

    super()
    this.state = {

        name : ""
    }
}
increment =() => {
    this.setState({
        name : this.state.name
    });
}
    
    render () 
          {
        function increment(name){ 
            window.alert (name)
            }
        return (
            <div>
                    <button onClick={() => increment("Tea")}>Click</button>
             </div>
        )
    }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>);