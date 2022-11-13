const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };
  console.log(scroll);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scroll;
};
