// Function to check the mouse position to display the glow
const glowOnMouse = (e) => {
  // Condition to check if light theme is on, if it is, do not run the function
  if (!document.body.classList.contains("light_theme")) {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
};
