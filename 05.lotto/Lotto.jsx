import React, { useEffect, useState, useRef, useCallback } from "react";
import Ball from "./Ball";

const shuffleNumber = () => {
  console.log("shuffleNumber");
  const lottoNum = Array(45)
    .fill()
    .map((_, idx) => idx + 1);
  const shuffle = [];

  while (lottoNum.length > 0) {
    const randomIdx = Math.floor(Math.random() * lottoNum.length);
    shuffle.push(lottoNum.splice(randomIdx, 1)[0]);
  }

  return shuffle;
};

const getWinNumbers = () => {
  console.log("getWinNumbers");
  const shuffle = shuffleNumber();
  const lotto = shuffle.slice(0, 6);
  const bonus = shuffle[shuffle.length - 1];

  return [...lotto, bonus];
};

function Lotto() {
  const lottoNumber = useCallback(getWinNumbers, []);
  const [winNumbers, setWinNumbers] = useState(lottoNumber);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState();
  const [reDo, setReDo] = useState(false);
  const timer = useRef([]);

  const onReset = () => {
    setWinNumbers(lottoNumber);
    setWinBalls([]);
    setBonus();
    setReDo(false);
  };

  useEffect(() => {
    winNumbers.forEach((num, idx) => {
      timer.current[idx] = setTimeout(() => {
        if (idx !== winNumbers.length - 1) {
          setWinBalls((prevState) => [...prevState, num]);
        } else {
          setBonus(num);
          setReDo(true);
        }
      }, (idx + 1) * 800);
    });

    return () => {
      timer.current.forEach((timer) => clearTimeout(timer));
    };
  }, [winNumbers]);

  return (
    <>
      <div>
        <p>당첨 번호</p>
        <div>
          {winBalls.map((ball) => (
            <Ball key={ball} number={ball} />
          ))}
        </div>
      </div>
      <div>
        <p>보너스</p>
        {bonus && <Ball number={bonus} />}
        {reDo && (
          <button type="button" onClick={onReset}>
            다시 추첨
          </button>
        )}
      </div>
    </>
  );
}

export default React.memo(Lotto);
