import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unFilteredArray: [
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  changeHandler = (val) => {
    this.setState({ userInput: val });
  };

  filterObject = (userInput) => {
    const filtered = [];
    for (let i = 0; i < this.state.unFilteredArray.length; i++) {
      if (this.state.unFilteredArray[i].hasOwnProperty(userInput)) {
        filtered.push(this.state.unFilteredArray[i]);
      }
    }
    this.setState({ filteredArray: filtered });
  };


//why doesn't this work??
//   filterObject = (userInput) => {
//     const filtered = [];
//     for (let i = 0; i < this.state.unFilteredArray.length; i++) {
//         console.log(this.state.unFilteredArray[i].userInput)
//       if (this.state.unFilteredArray[i].userInput !== undefined ) {
//         filtered.push(this.state.unFilteredArray[i]);
//       }
//     }
//     this.setState({ filteredArray: filtered });
//   };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
        <input
          className="inputLine"
          onChange={(e) => this.changeHandler(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => {
            this.filterObject(this.state.userInput);
          }}
        >Filter</button>
        <span className="resultsBox filterObjectRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
