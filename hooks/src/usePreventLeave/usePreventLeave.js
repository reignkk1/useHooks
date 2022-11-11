const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const enableClose = () => window.addEventListener("beforeunload", listener);
  const disableClose = () =>
    window.removeEventListener("beforeunload", listener);

  return { enableClose, disableClose };
};
