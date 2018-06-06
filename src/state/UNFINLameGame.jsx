// Create a <LameGame aim={ x }> component. When a "Start" button is pressed it displays "{ aim } seconds" and shows a "Now" button. The idea is to click the "Now" button as close to aim seconds after you pressed "Start". Once you click on "Now" it should tell you how close you were in 1/10ths of a second. The "Start" and "Now" buttons should only show when relevant.

import React, { Component } from "react";


class LameGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      disp: "none",
      timedisp: "none",
      timecount: 0,
      answer: "none",
    }

    this.handleClick = this.handleClick.bind(this);
    this.timingClick = this.timingClick.bind(this);
  }

  startTimer(counter) {

    setInterval(function(){
      counter = counter - 1;
       console.log(counter);
    }, 100);
  }

  stopTimer(){
    console.log("Potato")
    clearInterval(this.startTimer);
  }

  handleClick() {
    let counter = this.props.aim;
    this.startTimer(counter);
    this.setState({
      disp: "block",
      timedisp: "none",
      timecount: counter,
      answer: "none"
    })
  }

  timingClick() {
    this.stopTimer();
  }

  render() {
    const { disp, timedisp, answer, time } = this.state;
    const { aim } = this.props;

    return (
      <React.Fragment>
        <button onClick={ this.handleClick }>Start</button>
        <br/><br/>
        <p style={{display: timedisp}}>{ aim } seconds</p>
        <button style={{display: disp}} onClick={ this.timingClick }>NOW!</button>
        <p style={{display: answer}}>{ time } seconds left</p>
      </React.Fragment>
    )
  }
}

export default LameGame;
