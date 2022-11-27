/* eslint-disable*/

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 제목변경] = useState(["남자 코트 추천", "여자 코트 추천", "베스트 코트 추천"]);
  let [따봉, 좋아요] = useState(0);

  function 좋아요클릭() {
    좋아요(따봉 + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button
        onClick={() => {
          //깊은 복사
          let copy = [...글제목];
          copy.sort();
          제목변경(copy);
        }}
      >
        가나다순
      </button>
      <button
        onClick={() => {
          //깊은 복사
          let copy = [...글제목];
          copy[0] = "하계 코트 추천";
          제목변경(copy);
        }}
      >
        제목변경
      </button>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span className="like" onClick={좋아요클릭}>
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
