import { useEffect, useRef, useState } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const trigger = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (typeof callback === "function") {
        callback(true);
      }
    }
  };

  return { element, trigger };
};

function App() {
  const isFull = (full) => {
    console.log(full ? "full" : "Not full");
  };
  const { element, trigger } = useFullScreen(isFull);
  return (
    <div>
      <img
        ref={element}
        src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdnvefa72aowie.cloudfront.net%2Forigin%2Farticle%2F202205%2Fe66775ad65ee1b15f4a961de543405fa72c2c9c86705a1603be9ab9b510f70ae.webp%3Fq%3D95%26s%3D1440x1440%26t%3Dinside&type=a340"
      />

      <button onClick={trigger}>full screen</button>
    </div>
  );
}

export default App;
