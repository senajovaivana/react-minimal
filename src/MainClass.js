import React from 'react'

class MainClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a : 0,
            b : 0,
            array : [],
            squareRootsArray : []
        };
        this.onChangeA = this.onChangeA.bind(this);
        this.onChangeB = this.onChangeB.bind(this);
        this.onClickProcessArray = this.onClickProcessArray.bind(this);
        this.rend = 0;
    }

    componentDidUpdate(prevProps, prevState) {
        console.timeEnd("render - " + this.rend);
    }

    componentDidMount() {
        console.timeEnd("render - " + this.rend);
    }

    render() {
        this.rend += 1;
        console.time("render - " + this.rend);
        return(
            <div>
                <input onChange={this.onChangeA} type='number'/>
                <input onChange={this.onChangeB} type='number'/>
                <div > Then the array is: {this.state.array.toString()} </div>
                <button onClick={this.onClickProcessArray}>Process array</button>
                <div> The array with square values: {this.state.squareRootsArray.toString()} </div>
            </div>
        );

    }

    onClickProcessArray() {
        this.setState( {
            squareRootsArray : this.state.array.map((s) => Math.sqrt(s))
        });
    }

    onChangeA(event) {
        this.setState({ a: event.target.value},
            () => {
                this.generateArray();
            });
    }

    onChangeB(event) {
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