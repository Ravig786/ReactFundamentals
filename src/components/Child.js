import React from "react";
export default class Child extends React.Component {
    render() {
        return (
            <div>
                <h1>Child</h1>
                <button
                    onClick={() => this.props.updateState("parent has been updated")}
                >
                    {this.props.text}
                </button>
            </div>
        );
    }
}