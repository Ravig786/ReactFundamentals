import "./App.css";
import React from "react";
import DisableButton from "./components/DisableButton";
import Toggle from "./components/Toggle";
import Child from "./components/Child";
class App extends React.Component {

  state = {
    text: 'Change Parent Value'
  }

  handleUpdate = (newtext) => {
    this.setState({ text: newtext })
  }

  render() {
    return (
      <div className="App">
        <br />
        <div>
          Disable Button after click &nbsp;
          <DisableButton />
        </div>
        <br />
        <div>
          <div>
            <h1>Parent</h1>
            <p>{this.state.text}</p>
            <div>
              <Child
                text={this.state.text}
                updateState={this.handleUpdate}
              ></Child>
            </div>
          </div>
        </div>
        <br />
        <div>
          <Toggle />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <br />
//       <div>
//         Disable Button after click &nbsp;
//         <DisableButton />
//       </div>
//       <br />
//       <div>
//         <div>
//           <h1>Parent</h1>
//           <p>{this.state.text}</p>
//           <div>
//             <Child
//               text={this.state.text}
//               updateState={this.handleUpdate}
//             ></Child>
//           </div>
//         </div>
//       </div>
//       <br />
//       <div>
//         <Toggle />
//       </div>
//     </div>
//   );
// }

export default App;
