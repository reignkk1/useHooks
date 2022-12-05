import { useEffect, useRef, useState } from "react";

function App() {
  const trigerNotif = useNotification();
  return <button onClick={trigerNotif}>Hi</button>;
}

export default App;
