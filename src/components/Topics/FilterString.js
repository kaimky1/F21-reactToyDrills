import React, { Component } from "react";

export default class FilterString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unfilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy",
      ],
      userInput: "",
      filteredArray: [],
    };

}
changeHandler = (val) => {
    this.setState({ userInput: val })
}

filterString = (val) => {
    const filtered = [];
    for(let i = 0; i < this.state.unfilteredArray.length; i++){
        if(val === this.state.unfilteredArray[i]){
            filtered.push(val)
        }
    }
    this.setState({ filteredArray: filtered })
}
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
        <input className="inputLine" onChange={(e) => {this.changeHandler(e.target.value)}}></input>
        <button className="confirmationButton" onClick={() => {this.filterString(this.state.userInput)}}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}
