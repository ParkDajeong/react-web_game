const React = require("react");
const { useState, useRef } = require("react");

function WordRelay() {
  const inputRef = useRef();
  const [word, setWord] = useState("인형");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const last = word[word.length - 1];
    if (value.length > 1 && value[0] === last) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡!");
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input //
          type="text"
          ref={inputRef}
          value={value}
          onChange={onChange}
        />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

module.exports = WordRelay;
