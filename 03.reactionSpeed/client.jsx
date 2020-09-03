import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";
import ReactionSpeed from "./ReactionSpeed";
const Hot = hot(ReactionSpeed);

ReactDom.render(<Hot />, document.querySelector("#root"));
