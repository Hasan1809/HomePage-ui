const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

const shape1 = document.getElementById("shape1");
const shape2 = document.getElementById("shape2");
const shape3 = document.getElementById("shape3");
const img = document.querySelector(".big");

shape1.addEventListener("click", () => {
  shape1.classList.remove("shape");
  shape1.classList.add("shape-clicked");
  shape2.classList.remove("shape-clicked");
  shape2.classList.add("shape");
  shape3.classList.remove("shape-clicked");
  shape3.classList.add("shape");
  img.src = "assets/images/small1.png";
});
shape2.addEventListener("click", () => {
  shape2.classList.remove("shape");
  shape2.classList.add("shape-clicked");
  shape1.classList.remove("shape-clicked");
  shape1.classList.add("shape");
  shape3.classList.remove("shape-clicked");
  shape3.classList.add("shape");
  img.src = "assets/images/big.png";
});
shape3.addEventListener("click", () => {
  shape3.classList.remove("shape");
  shape3.classList.add("shape-clicked");
  shape1.classList.remove("shape-clicked");
  shape1.classList.add("shape");
  shape2.classList.remove("shape-clicked");
  shape2.classList.add("shape");
  img.src = "assets/images/small2.png";
});
