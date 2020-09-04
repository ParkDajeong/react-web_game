import React from "react";
import { CLICK_CELL } from "./TicTacToe";

function Td({ colIndex, rowIndex, celldata, dispatch, winner }) {
  const onClickCell = () => {
    //console.log(`${colIndex}, ${rowIndex}`);
    if (celldata || winner) return;
    dispatch({ type: CLICK_CELL, col: colIndex, row: rowIndex });
  };

  return <td onClick={onClickCell}>{celldata}</td>;
}

export default React.memo(Td);
