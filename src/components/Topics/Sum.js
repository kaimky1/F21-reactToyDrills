import React, { Component } from "react";

export default class Sum extends Component {
    constructor(props) {
        super(props);


        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    changeHandler1 = (val) => {
        this.setState({number1: +val})
    }
    changeHandler2 = (val) => {
        this.setState({number2: +val})
    }

    sum = (num1, num2) => {
        console.log(+num1)
        let add = 0;
        add = num1 + num2;
        this.setState({sum:add})
    }
    render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => {this.changeHandler1(e.target.value)}}
        ></input>
        <input
          className="inputLine"
          onChange={(e) => {this.changeHandler2(e.target.value)}}
        ></input>
        <button
          className="confirmationButton"
          onClick={(e) => {this.sum(this.state.number1, this.state.number2)}}
        >
          Sum
        </button>
        <span className="resultsBox">
          Sum: {JSON.stringify(this.state.sum)}
        </span>
      </div>
    );
  }
}
