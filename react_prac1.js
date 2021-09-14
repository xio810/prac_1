import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const Hello = () => {
  return <div>hello</div>
}

const Bye = () => {
  return (
    <div>bye</div>
  )
}

const App = () => {
  return (
    <>
     <Hello />
     <Bye></Bye>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
