import React, { useState, useRef } from "react";
import TryList from "./TryList";

const getNumbers = (len) => {
  const numbers = [];

  while (numbers.length < len) {
    const num = Math.ceil(Math.random() * 9);
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
};

function Baseball() {
  const inputRef = useRef("");
  const answer = useRef(getNumbers(4));
  const [isHomeRun, setIsHomeRun] = useState(false);
  const [tries, setTries] = useState([]);
  const [score, setScore] = useState("");
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const getScore = () => {
    const number = answer.current;
    let strike = 0;
    let ball = 0;

    if (value === number.join("")) {
      setIsHomeRun(true);
      return "홈런!!!";
    }

    for (let i = 0; i < number.length; i++) {
      if (number[i] === Number(value[i])) {
        strike++;
      } else if (number.includes(Number(value[i]))) {
        ball++;
      }
    }
    return `${strike} 스트라이크 ${ball} 볼`;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (tries.length === 10 || isHomeRun) return;
    const result = getScore();
    setTries((tries) => [...tries, { value, score: result }]);
    setScore(result);
    setValue("");
    inputRef.current.focus();
  };

  return (
    <>
      <h3>{score}</h3>
      <form onSubmit={onSubmit}>
        <input //
          ref={inputRef}
          type="text"
          value={value}
          onChange={onChange}
          maxLength={4}
        />
      </form>
      <div>시도: {tries.length}</div>
      {(tries.length === 10 || isHomeRun) && <h2>정답: {answer.current}</h2>}
      <ul>
        {tries.map((data, idx) => (
          <TryList key={idx} value={data.value} score={data.score} />
        ))}
      </ul>
    </>
  );
}

export default React.memo(Baseball);
