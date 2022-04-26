import React  from 'react';
import FetchUsers from './FetchUsers';
export default class Toggle extends React.Component {
    state = {
        show: true,
    }

    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));

    render() {
        console.log(this);
        return (
            <div>
                <button onClick={this.toggle}>
                    toggle: {this.state.show ? 'Show Users' : 'Hide Users'}
                </button>
                {this.state.show && <div>
                    <FetchUsers/>
                </div>}
            </div>
        );
    }
}