const React = require("react");
const ReactDom = require("react-dom");
const { hot } = require("react-hot-loader/root");
const WordRelay = require("./WordRelay");
const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector("#root"));

// @babel/core: 기본적인 babel
// @babel/preset-env: 각 자의 컴퓨터 환경에 맞게 바꿔주는 것
// @babel/preset-react: react 관련(jsx)
// babel-loader: babel과 webpack 연결
