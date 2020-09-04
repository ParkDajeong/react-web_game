import React from "react";
import Td from "./Td";

function Tr({ rowData, colIndex, dispatch, winner }) {
  return (
    <tr>
      {rowData.map((cell, idx) => (
        <Td //
          key={idx}
          colIndex={colIndex}
          rowIndex={idx}
          celldata={cell}
          dispatch={dispatch}
          winner={winner}
        />
      ))}
    </tr>
  );
}

export default React.memo(Tr);
