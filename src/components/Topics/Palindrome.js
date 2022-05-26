import React, { Component } from 'react'

//Some questions
//Destructuring is optional right? Is it possible to destructure props here? 


export default class Palindrome extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '', 
            palindrome: ''
        }
    }

    changeHandler = (val) => {
        this.setState({ userInput:val })
    }

    isPalindrome = (val) => {
        let isItPalindrome = false;
        var re = /[\W_]/g;
        var lowRegStr = val.toLowerCase().replace(re, '');
        console.log(lowRegStr)
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        console.log(reverseStr)
        if(reverseStr === lowRegStr){
            isItPalindrome = true;
        };
        console.log(isItPalindrome)
        this.setState({ palindrome:isItPalindrome })
    }

    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => {this.changeHandler(e.target.value)}}></input>
                <button className='confirmationButton' onClick={(e) => {this.isPalindrome(this.state.userInput)}}>Check</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}