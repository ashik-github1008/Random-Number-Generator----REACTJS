// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onClickGenerate = () => {
    const randomNum = Math.random()
    const roundoffNum = Math.ceil(randomNum * 99)

    console.log(roundoffNum)

    this.setState({number: roundoffNum})
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="generate-btn" onClick={this.onClickGenerate}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
