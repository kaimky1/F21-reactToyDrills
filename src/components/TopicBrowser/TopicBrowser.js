import React, { Component } from 'react'


import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'



// const TopicBrowser = () => {
//     return <p>Hello World</p>
// }

export default class TopicBrowser extends Component {
    render() {
        return (
            <div className="puzzleFeed">
                <p>Hello World!</p>
                <EvenAndOdd />
                <FilterObject></FilterObject>
                <FilterString></FilterString>
                <Palindrome></Palindrome>
                <Sum></Sum>
            </div>
        )
    }
}

