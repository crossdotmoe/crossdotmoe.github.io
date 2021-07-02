const hello = (() => {
  const start = () => {
    const hellos = [
      { lang: "english", word: "Hello", dir: "ltr" },
      { lang: "spanish", word: "Hola", dir: "ltr" },
    ];

    let current = 0;

    const createElement = (hello) => {
      return `<h3 class="${hello.lang}" dir="${hello.dir}">${hello.word}</h3>`;
    };

    const showNext = () => {
      if (current >= hellos.length) {
        current = 0;
      }

      const $greeting = lib.$(".typewriter .greetings");
      $greeting.innerHTML = createElement(hellos[current]);
      current += 1;
    };

    setTimeout(() => {
      showNext();
      setInterval(showNext, 3500);
    }, 500);
  };

  return {
    start: start,
  };
})();

lib.onReady(hello.start);
