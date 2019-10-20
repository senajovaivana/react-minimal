import React from 'react'

class MainClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a : 0,
            b : 0
        };
        this.onClickA = this.onClickA.bind(this);
        this.onClickB = this.onClickB.bind(this);
    }

    render() {
        return(
            <div>
                <input onChange={this.onClickA} type='number'/>
                <input onChange={this.onClickB} type='number'/>
            </div>
        );
    }

    onClickA(event) {
        this.setState({ a: event.target.value},
            () => {
                console.log("Value changed a:" + this.state.a);
            });
    }

    onClickB(event) {
        this.setState({ b: event.target.value},
            () => {
                console.log("Value changed b: " + this.state.b);
            });
    }
}

export default MainClass;