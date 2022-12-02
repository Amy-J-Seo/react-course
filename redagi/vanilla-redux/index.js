import { legacy_createStore as createStore } from "redux";

console.log("ddd");

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
const initialState = {
  toggle: false,
  counter: 0,
};

// when state is undefined, use initalState as default
function reducer(state = initialState, action) {
  // depend on the action.type, work on different job
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
const render = () => {
  console.log(store);
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
  console.log("++++");
  store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
  console.log("---");
  store.dispatch(decrease());
};
