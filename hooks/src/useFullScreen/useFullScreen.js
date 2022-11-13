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
