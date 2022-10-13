let mySpans = document.querySelectorAll(".patern .box .text span");
let mySection = document.querySelector(".patern");
let started = false;

console.log(mySpans)


window.onscroll = function () {
  if (window.scrollY >= mySection.offsetTop) {
    if (!started) {
      mySpans.forEach((num) => myCounter(num))
    }
    started = true;
  }
}

function myCounter(el) {
  let goal = el.dataset.count;
  let Counter = setInterval(() => {
    el.textContent++
    if (el.textContent === goal) {
      clearInterval(Counter)
    }
  }, 3000 / goal)
}


let myDivs = document.querySelectorAll(".our-link");
let mylinks = document.querySelectorAll(".nav-item .nav-link");


mylinks.forEach((el) => {
  el.addEventListener("click", function () {
    mylinks.forEach((el) => {
      el.classList.remove("active")
    })
    this.classList.add("active");
  })
})