const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//엑션 타입 설정
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

//초기값 설정
const initalState = {
  toggle: false,
  counter: 0,
};
