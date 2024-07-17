import "./App.css";
import Box from "./component/box";
import { useState } from "react";

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  const [userBorder, setUserBorder] = useState("blue");
  const [computerBorder, setComputerBorder] = useState("blue");

  const play = (userChoice) => {
    const user = choice[userChoice];
    const computer = randomChoice();
    const userResult = judgeWinner(user, computer);
    const computerResult =
      userResult === "tie" ? "tie" : userResult === "win" ? "lose" : "win";

    setUserSelect(user);
    setComputerSelect(computer);
    setUserResult(userResult);
    setComputerResult(computerResult);

    setUserBorder(getColor(userResult));
    setComputerBorder(getColor(computerResult));
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomIndex = Math.floor(Math.random() * itemArray.length);
    const key = itemArray[randomIndex];
    return choice[key];
  };

  const judgeWinner = (user, computer) => {
    if (user.name === computer.name) return "tie";
    if (user.name === "Rock")
      return computer.name === "Scissor" ? "win" : "lose";
    if (user.name === "Scissor")
      return computer.name === "Paper" ? "win" : "lose";
    if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
  };

  const getColor = (result) => {
    if (result === "tie") return "black";
    return result === "win" ? "green" : "red";
  };

  return (
    <div>
      <div className="main">
        <Box
          title="You"
          item={userSelect}
          result={userResult}
          color={userBorder}
        />
        <Box
          title="Computer"
          item={computerSelect}
          result={computerResult}
          color={computerBorder}
        />
      </div>
      <div className="main">
        <button className="bt" onClick={() => play("scissor")}>
          가위
        </button>
        <button className="bt" onClick={() => play("rock")}>
          바위
        </button>
        <button className="bt" onClick={() => play("paper")}>
          보
        </button>
      </div>
    </div>
  );
}

export default App;
