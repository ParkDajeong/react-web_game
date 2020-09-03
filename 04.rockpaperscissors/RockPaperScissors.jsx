import React, { useState, useRef, useEffect } from "react";
import ScorePannel from "./ScorePannel";

function RockPaperScissors() {
  const [comScore, setComScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [result, setResult] = useState("");
  const [isStop, setIsStop] = useState(false);
  const timer = useRef();
  const imgIndex = useRef(0);

  const slideImages = (imgs) => {
    if (isStop) return;

    timer.current = setInterval(() => {
      imgs.forEach((img) => (img.style.display = "none"));
      if (imgIndex.current === imgs.length) {
        imgIndex.current = 0;
      }
      imgs[imgIndex.current++].style.display = "inline-block";
    }, 80);
  };

  const getResult = (player) => {
    const com = imgIndex.current - 1;
    const resultNum = com - player;
    switch (resultNum) {
      case 1:
      case -2:
        setResult("👏당신이 이겼습니다👏");
        setPlayerScore(playerScore + 1);
        break;
      case -1:
      case 2:
        setResult("😥당신이 졌습니다😥");
        setComScore(comScore + 1);
        break;
      case 0:
        setResult("비겼습니다.");
        break;
      default:
        isStop = false;
        alert("ERROR) 알 수 없는 오류. 새로 고침 해주세요.");
    }
  };

  const pauseImage = () => {
    setTimeout(() => {
      setIsStop(false);
    }, 1200);
  };

  const onClickButton = (e) => {
    const playerHand = e.target.dataset.hand;
    setIsStop(true);
    getResult(playerHand);
    pauseImage();
  };

  useEffect(() => {
    const imgs = document.querySelectorAll(".imgBox img");
    slideImages(imgs);

    return () => clearInterval(timer.current);
  }, [isStop]);

  return (
    <>
      <ScorePannel com={comScore} player={playerScore} />
      <div id="game">
        <div className="imgBox">
          <img src="./images/rock.png" alt="바위" />
          <img src="./images/scissors.png" alt="가위" />
          <img src="./images/paper.png" alt="보" />
        </div>
        <ul className="btnBox">
          <li>
            <button type="button" data-hand={0} onClick={onClickButton}>
              바위
            </button>
          </li>
          <li>
            <button type="button" data-hand={1} onClick={onClickButton}>
              가위
            </button>
          </li>
          <li>
            <button type="button" data-hand={2} onClick={onClickButton}>
              보
            </button>
          </li>
        </ul>
        <span>{result}</span>
      </div>
    </>
  );
}

export default RockPaperScissors;
