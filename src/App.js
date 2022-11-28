/* eslint-disable*/

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 제목변경] = useState(["남자 코트 추천", "여자 코트 추천", "베스트 코트 추천"]);
  let [따봉, 좋아요] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  function 좋아요클릭(index) {
    let copy = [...따봉]
    copy[index]=copy[index]+1
    좋아요(copy);
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
      {
        글제목.map((item,index)=>{
          return (
            <div className="list" key={index}>
              <h4><span onClick={()=>{setModal(!modal)}}>{item} </span><span className="like" onClick={()=>{좋아요클릭(index)}}>👍</span>{따봉[index]}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {modal == true ? <Modal /> : null}
    </div>
  );
}

//둘 다 같음
//const Modal = () => {}
function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
