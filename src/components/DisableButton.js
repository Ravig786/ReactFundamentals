import React from "react";

export default class DisableButton extends React.Component {

  state = {
      disabled: false
  }

  setDisable(x){
    return this.setState({disabled:x})
  }
  render(){
      return (
        <button disabled={this.state.disabled} onClick={() =>  this.setDisable(true)}>
          Click to Disable!
        </button>
      );
  }
}