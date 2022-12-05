/* eslint-disable*/

import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  let [글제목, 제목변경] = useState(["남자 코트 추천", "여자 코트 추천", "베스트 코트 추천"]);
  let [따봉, 좋아요] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, 0]);
  let [text, setText] = useState("");

  function 좋아요클릭(index) {
    let copy = [...따봉];
    copy[index] = copy[index] + 1;
    좋아요(copy);
  }

  function deleteItem(index) {
    let copy = [...글제목];
    copy.splice(index, 1);
    let copyLike = [...따봉];
    copyLike.splice(index, 1);
    좋아요(copyLike);
    제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      {글제목.map((item, index) => {
        return (
          <div className="list" key={index}>
            <h4>
              <span
                onClick={() => {
                  if (modal[0] && modal[1] != index) {
                    setModal([true, index]);
                  } else {
                    modal[0] == true ? setModal([false, index]) : setModal([true, index]);
                  }
                }}
              >
                {item}{" "}
              </span>
              <span
                className="like"
                onClick={() => {
                  좋아요클릭(index);
                }}
              >
                👍
              </span>
              {따봉[index]}&nbsp;
              <button
                onClick={() => {
                  deleteItem(index);
                }}
              >
                삭제
              </button>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />

      <button
        onClick={() => {
          if (text.length == 0) {
            return;
          }
          let copy = [...글제목];
          copy.unshift(text);
          let copyLike = [...따봉];
          copyLike.unshift(0);
          좋아요(copyLike);
          제목변경(copy);
          setText("");
        }}
      >
        등록
      </button>
      <Modal2></Modal2>
      {modal[0] == true ? <Modal index={modal[1]} color="skyblue" 글제목={글제목} 제목변경={제목변경} /> : null}
    </div>
  );
}

//둘 다 같음
//const Modal = () => {}
function Modal(props) {
  return (
    <>
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.글제목[props.index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            let copy = [...props.글제목];
            copy[0] = "오늘의 추천 코드";
            props.제목변경(copy);
          }}
        >
          글수정
        </button>
      </div>
    </>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "woo",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        모달2 {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
