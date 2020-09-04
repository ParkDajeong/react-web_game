import React from "react";
import Tr from "./Tr";

function Table({ tableData, dispatch, winner }) {
  return (
    <table>
      {/* {Array(tableData.length).fill().map(() => (<Tr />))} */}
      {tableData.map((rowData, idx) => (
        <Tr //
          key={idx}
          rowData={rowData}
          colIndex={idx}
          dispatch={dispatch}
          winner={winner}
        />
      ))}
    </table>
  );
}

export default Table;
