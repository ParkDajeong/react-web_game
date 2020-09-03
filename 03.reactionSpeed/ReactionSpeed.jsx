import React, { useState, useRef, useCallback } from "react";

function ReactionSpeed() {
  const [gameState, setGameState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요.");
  const [result, setResult] = useState([]);
  const timer = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const changeGameState = useCallback((e) => {
    const state = e.target.className;

    switch (state) {
      case "waiting": {
        setGameState("ready");
        setMessage("초록색이 되면 클릭하세요.");
        timer.current = setTimeout(() => {
          setGameState("now");
          setMessage("클릭하세요!!");
          startTime.current = new Date();
        }, Math.floor(Math.random() * 1000) + 2000);
        break;
      }
      case "ready": {
        clearTimeout(timer.current);
        setGameState("waiting");
        setMessage("너무 성급하군요. 다시!");
        break;
      }
      case "now": {
        endTime.current = new Date();
        setGameState("waiting");
        setMessage("클릭해서 시작하세요.");
        setResult((prevState) => [...prevState, endTime.current - startTime.current]);
        break;
      }
      default: {
        alert("error!! 초기화/새로고침을 해주세요.");
      }
    }
  }, []);

  const onReset = useCallback(() => setResult([]), []);

  return (
    <>
      <div //
        id="screen"
        className={gameState}
        onClick={changeGameState}
      >
        <h3>{message}</h3>
      </div>
      {result.length > 0 && (
        <>
          <h4>반응 속도: {result[result.length - 1]}ms</h4>
          <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}</div>
          <button type="button" onClick={onReset}>
            초기화
          </button>
        </>
      )}
    </>
  );
}

export default ReactionSpeed;
