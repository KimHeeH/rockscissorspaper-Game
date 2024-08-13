import "./App.css";
import React, { Component } from "react";
import Box from "./component/box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn.pixabay.com/photo/2017/09/01/11/56/hand-2704013_960_720.jpg",
  },
  scissor: {
    name: "Scissor",
    img: "https://thumb.photo-ac.com/e1/e197a21223ddf0a1e3a56d5594d8605d_t.jpeg",
  },
  paper: {
    name: "Paper",
    img: "https://christianlife.nz/wp-content/uploads/2018/11/the-palm-of-your-hand-2704015_640.jpg",
  },
};
export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: "",
      userBorder: "blue",
      computerBorder: "blue",
    };
  }
  play = (userChoice) => {
    const user = choice[userChoice];
    const computer = this.randomChoice();
    const userResult = this.judgeWinner(user, computer);
    const computerResult =
      userResult === "tie" ? "tie" : userResult === "win" ? "lose" : "win";
    this.setState({
      userSelect: user,
      computerSelect: computer,
      userResult: userResult,
      computerResult: computerResult,
      userBorder: this.getColor(userResult),
      computerBorder: this.getColor(computerResult),
    });
  };
  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomIndex = Math.floor(Math.random() * itemArray.length);
    const key = itemArray[randomIndex];
    return choice[key];
  };
  judgeWinner = (user, computer) => {
    if (user.name === computer.name) return "tie";
    if (user.name === "Rock")
      return computer.name === "Scissor" ? "win" : "lose";
    if (user.name === "Scissor")
      return computer.name === "Paper" ? "win" : "lose";
    if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
  };
  getColor = (result) => {
    if (result === "tie") return "black";
    return result === "win" ? "green" : "red";
  };
  render() {
    return (
      <div>
        <div className="main">
          <Box
            title="You"
            item={this.state.userSelect}
            result={this.state.userResult}
            color={this.state.userBorder}
          />
          <Box
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.computerResult}
            color={this.state.computerBorder}
          />
        </div>
        <div className="main">
          <button className="bt" onClick={() => this.play("scissor")}>
            가위
          </button>
          <button className="bt" onClick={() => this.play("rock")}>
            바위
          </button>
          <button className="bt" onClick={() => this.play("paper")}>
            보
          </button>
        </div>
      </div>
    );
  }
}
