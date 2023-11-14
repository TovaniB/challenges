const bookmark_white = document.querySelector('[data-js="bookmark_white"]');

const bookmark_black = document.querySelector('[data-js="bookmark_black"]');

bookmark_white.addEventListener("click", () => {
  console.log("hallo");
  bookmark_black.removeAttribute("hidden");
});

bookmark_black.addEventListener("click", () => {
  console.log("hi");
  bookmark_black.setAttribute("hidden", "");
});

const button = document.querySelector('[data-js="button"]');
