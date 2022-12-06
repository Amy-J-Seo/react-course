const loggerMiddleware = (store) => (next) => (action) => {
  // basic format of middleware
  console.group(action && action.type);
  console.log("before state", store.getState());
  console.log("action", action);
  next(action);
  console.log("next state", store.getState());
  console.group();
};

// const loggerMiddleware = function loggerMiddleware(store){
//     return function(next){
//         return function(action){
//             //basic format of middleware
//         }
//     }
// }

export default loggerMiddleware;
