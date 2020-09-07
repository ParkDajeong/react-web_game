import React from "react";
import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";
import WordRelay from "../01.word/WordRelay";
import Baseball from "../02.numberBaseball/Baseball";
import ReactionSpeed from "../03.reactionSpeed/ReactionSpeed";

function Games() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/word-chain">끝말잇기</Link>
        &nbsp;
        <Link to="/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/reaction-speed">반응속도 체크</Link>
      </div>
      <div>
        <Route path="/word-chain" component={WordRelay} />
        <Route path="/number-baseball" component={Baseball} />
        <Route path="/reaction-speed" component={ReactionSpeed} />
      </div>
    </BrowserRouter>
  );
}

export default Games;
