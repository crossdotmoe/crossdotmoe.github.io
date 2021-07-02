const lib = (() => {
  const onReady = (fn) => {
    document.addEventListener("DOMContentLoaded", fn);
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  return {
    onReady: onReady,
    $: $,
    $$: $$,
  };
})();
