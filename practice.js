const ham = document.querySelector(".hamburger");
const navlinks = document.querySelector(".Nav-links");
const links = document.querySelectorAll(".Nav-links li");
const Words = document.querySelector(".p");
const strLength = Words.textContent;
const SPlit = strLength.split("");
Words.textContent="";
for (let i = 0; i < SPlit.length; i++) {
  Words.innerHTML += "<span>" + SPlit[i] + "</span>";
}
let char = 0;
let timer = setInterval(ontick, 0.1);
function ontick() {
  const span = Words.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;

  if (char === SPlit.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}
ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  navlinks.classList.toggle("open");
  var list;
  list = document.querySelectorAll(".line");
  for (var i = 0; i < list.length; ++i) {
    list[i].classList.toggle("open");
  }
});
