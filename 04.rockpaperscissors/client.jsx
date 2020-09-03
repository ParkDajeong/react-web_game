import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";
import RockPaperScissors from "./RockPaperScissors";
const Hot = hot(RockPaperScissors);

ReactDom.render(<Hot />, document.querySelector("#root"));
