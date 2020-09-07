import React, { useReducer, createContext, useMemo } from "react";
import Form from "./Form";
import Table from "./Table";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
};

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0,
  result: "",
};

const plantMine = (column, row, mine) => {
  console.log(column, row, mine);
  const candidate = Array(column * row)
    .fill()
    .map((arr, idx) => idx);
  const shuffle = [];
  while (candidate.length > column * row - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < column; i++) {
    const colData = [];
    for (let j = 0; i < row; i++) {
      colData.push(CODE.NORMAL);
    }
  }

  for (let i = 0; i < shuffle.length; i++) {
    const ver = Math.floor(shuffle[i] / row);
    const hor = shuffle[i] * row;
    console.log(ver, hor);
    data[ver][hor] = CODE.MINE;
  }

  console.log(data);
  return data;
};

export const START_GAME = "START_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.column, action.row, action.mine),
      };
    default:
      return state;
  }
};

function Minesweeper() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // useMemo를 통해서 캐싱을 한 번 해주어야 Context API 사용 시, 성능 저하가 덜 일어난다.
  const value = useMemo(() => ({ tableData: state.tableData, dispatch }), [state.tableData]);

  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{state.timer}</div>
      <Table></Table>
      <div>{state.result}</div>
    </TableContext.Provider>
  );
}

export default Minesweeper;
