import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import path from "path";
import fs from "fs";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";
import PreloadContext from "./lib/PreloadContext";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";

//search file paths from asset-manifest.json
// const manifest = JSON.parse(
//   fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
// );

// const chunks = Object.keys(manifest.files)
//   .filter((key) => /chunk\.js$/.exec(key)) //find key that ends with chunk.js
//   .map((key) => `<script src="${manifest.files[key]}"></script>`) //conver to script tag
//   .join(""); //concat

const statsFile = path.resolve("./build/loadable-stats.json");

function createPage(root, tags) {
  return `<!Doctype html>
  <html lang="en">
  <head>
  <meta charset="utf-8"/>
  <link rel="shortcut icon" href="/favicon.ico"  />
  <meta 
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="theme-color" content="#000000"/>
  <title>React App</title>
  ${tags.styles}
${tags.links}
  </head>
  <body>
  <noscript>You need to enable Javascript to run this app</noscript>
<div id="root">
${root}

</div>
${tags.script}
  </body>
  </html>
  `;
}

const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const preloadContext = {
    done: false,
    promises: [],
  };

  //ChunkExtractor to extract needed files
  const extractor = new ChunkExtractor({ statsFile });

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <PreloadContext.Provider value={preloadContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </PreloadContext.Provider>
    </ChunkExtractorManager>
  );

  ReactDOMServer.renderToStaticMarkup(jsx); //render one more time using renderToStaticMarkup
  try {
    await Promise.all(preloadContext.promises); //wait for all the promise to return reslove
  } catch (error) {
    return res.status(500);
  }
  preloadContext.done = true;

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
  //Convert Json to string, and convert < to prevent bad script exicution
  //https:redux.js.org/recipes/server-rendering#security-consideration
  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  // console.log("checking state String", stateString);
  const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`; //inject initla redux state as script

  // extract style script that should loaded in advance
  const tags = {
    scripts: stateScript + extractor.getScriptTags(),
    links: extractor.getLinkTags(),
    styles: extractor.getStyleTags(),
  };

  // console.log("checking stateScript!!!!", stateScript);
  res.send(createPage(root, tags)); // 결과물을 응답합니다.
};

const serve = express.static(path.resolve("./build"), {
  index: false, // set to not to show index.html from the "/" path
});

app.use(serve); //the order is important
app.use(serverRender);

// 5000 포트로 서버를 가동합니다.
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
