import React from "react";

function ScorePannel({ com, player }) {
  return (
    <table>
      <thead>
        <tr>
          <th>컴퓨터</th>
          <th>유저</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{com}</td>
          <td>{player}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ScorePannel;
