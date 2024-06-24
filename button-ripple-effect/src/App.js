const App = () => {
  const handleMouseOver = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--rippleTop", y + "px");
    btn.style.setProperty("--rippleLeft", x + "px");
  };

  return (
    <button href="#" className="btn" onMouseOver={handleMouseOver}>
      <span>Button</span>
    </button>
  );
};
export default App;
