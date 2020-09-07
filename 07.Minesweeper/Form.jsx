import React, { useState, useContext } from "react";
import { TableContext } from "./Minesweeper";
import { START_GAME } from "./Minesweeper";

function Form() {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(10);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = (e) => {
    setRow(e.target.value);
  };

  const onChangeCell = (e) => {
    setCell(e.target.value);
  };

  const onChangeMine = (e) => {
    setMine(e.target.value);
  };

  const onClickBtn = () => {
    dispatch({ type: START_GAME, column, row, mine });
  };

  return (
    <form>
      <input type="number" value={row} onChange={onChangeRow} />
      <input type="number" value={cell} onChange={onChangeCell} />
      <input type="number" value={mine} onChange={onChangeMine} />
      <button type="button" onClick={onClickBtn}>
        시작
      </button>
    </form>
  );
}

export default Form;
