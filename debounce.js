let btn = document.getElementById("button");

function debounce(fn, delay = 5000) {
  let timer;

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

btn.addEventListener(
  "click",
  debounce(function () {
    console.log("clicked");
  }, 1000)
);
