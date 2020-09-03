import React from "react";

function TryList({ value, score }) {
  return (
    <>
      <li>
        입력: {value}, 결과: {score}
      </li>
    </>
  );
}

export default React.memo(TryList);
