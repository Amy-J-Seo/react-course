import { createContext, useContext } from "react";

//server env:{done:false, promises:[]}
const PreloadContext = createContext(null);
export default PreloadContext;

//function type resolve
export const Preloader = ({ reslove }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null; //if context value is not valid, do nothing
  if (preloadContext.done) return null; //if process is already finished, do nothing

  //register promise to promises array
  //even if reslove function does not return promis, to act to promise
  //use Promise.reslove function
  preloadContext.promises.push(Promise.resolve(reslove()));
  return null;
};

//hook type function
export const usePreloader = (resolve) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;
  preloadContext.promises.push(Promise.resolve(resolve()));
};
