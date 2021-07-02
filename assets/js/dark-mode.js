const darkmode = (() => {
  const getMode = () => {
    const mode = localStorage.getItem("darkmode");

    if (mode) {
      return mode;
    }

    const darkQuery = "(prefers-color-scheme: dark)";

    if (window.matchMedia && window.matchMedia(darkQuery).matches) {
      return "on";
    }

    return "off";
  };

  const setClass = () => {
    lib.$("body").className = getMode() === "on" ? "dark" : "";
  };

  const toggle = () => {
    localStorage.setItem("darkmode", getMode() === "on" ? "off" : "on");
    setClass();
  };

  const addListener = () => {
    const $button = lib.$(".dark-mode");

    $button.addEventListener("click", (e) => {
      e.preventDefault();
      toggle();
    });
  };

  const init = () => {
    lib.onReady(addListener);
    window.onpageshow = setClass;
    setClass();
  };

  return {
    init: init,
  };
})();

darkmode.init();
