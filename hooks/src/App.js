import { useRef } from "react";

function App() {
  const useFadeIn = () => {
    const element = useRef();
    return { ref: element, style: { opacity: 0 } };
  };
  const el = useFadeIn();
  return (
    <div>
      <h1 {...el}>Hello World!</h1>
    </div>
  );
}

export default App;
