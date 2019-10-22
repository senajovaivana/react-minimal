import React from 'react'

class MainClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a : 0,
            b : 0,
            array : []
        };
        this.onClickA = this.onClickA.bind(this);
        this.onClickB = this.onClickB.bind(this);
    }

    render() {
        return(
            <div>
                <h2>Enter 2 numbers: </h2>
                <input onChange={this.onClickA} type='number'/>
                <input onChange={this.onClickB} type='number'/>
                <div > Then the array is: {this.state.array.toString()} </div>
            </div>
        );

    }

    onClickA(event) {
        this.setState({ a: event.target.value},
            () => {
                this.generateArray();
            });
    }

    onClickB(event) {
        this.setState({ b: event.target.value},
            () => {
                this.generateArray();
            });

    }

    generateArray() {
        let a = parseInt(this.state.a);
        let b = parseInt(this.state.b);
        let newArray = [];
        if (a < b && a > 0) {
            newArray = Array.apply(null, {length: b - a + 1})
                       .map(function (value, index) { return index + a });
        }
        this.setState({ array: newArray });
    }
}

export default MainClass;