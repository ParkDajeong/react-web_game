import React, { useEffect, useReducer } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.col] = [...tableData[action.col]];
      tableData[action.col][action.row] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.col, action.row],
      };
    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    case RESET_GAME:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { winner, turn, tableData, recentCell } = state;

  const checkLine = (col, row) => {
    // 가로 체크
    if (tableData[col].every((cell) => cell === turn)) {
      return true;
    }
    // 세로 체크
    if (tableData.every((line) => line[row] === turn)) {
      return true;
    }
    // 대각선(\) 체크
    if (tableData[0][0] == turn && tableData[1][1] == turn && tableData[2][2] == turn) {
      return true;
    }
    //대각선(/) 체크
    if (tableData[0][2] == turn && tableData[1][1] == turn && tableData[2][0] == turn) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const [col, row] = recentCell;
    if (row < 0) return;

    let allFill = true;
    let isWin = checkLine(col, row);
    if (isWin) {
      dispatch({ type: SET_WINNER, winner: turn });
    } else {
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            allFill = false;
            return;
          }
        });
      });
      if (allFill) {
        dispatch({ type: SET_WINNER, winner: "무승부" });
      } else {
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [recentCell]);

  const onClickReset = () => {
    dispatch({ type: RESET_GAME });
  };

  return (
    <>
      <Table //
        tableData={tableData}
        dispatch={dispatch}
        winner={winner}
      />
      {winner && (
        <>
          <div>{winner !== "무승부" ? `${winner}의 승리!` : winner}</div>
          <button type="button" onClick={onClickReset}>
            다시하기
          </button>
        </>
      )}
    </>
  );
}

export default TicTacToe;
