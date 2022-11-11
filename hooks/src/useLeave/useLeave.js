const useBeforeLeave = (callback) => {
  useEffect(() => {
    if (typeof callback !== "function") {
      return;
    }
    const handle = (e) => {
      const { clientY } = e;
      if (clientY <= 0) {
        callback();
      }
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
