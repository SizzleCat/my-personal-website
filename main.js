// open rotating cover and links slide in
const hamburger = document.getElementById("hamburger");
const rotContainer = document.querySelector(".rotating-container");
const body = document.querySelector("body");
const x = document.getElementById("x-mark");
const links = document.querySelectorAll("li");

hamburger.addEventListener("click", rotateScreen);

function rotateScreen() {
  rotContainer.classList.add("rotate");
  body.classList.add("show-overflow");

  links.forEach((link, index) => {
    setTimeout(function () {
      link.style.transform = "translateX(0)";
    }, 500 + index * 200);
  });
}

// close rotating cover
x.addEventListener("click", unRotateScreen);

function unRotateScreen() {
  rotContainer.classList.remove("rotate");
  body.classList.remove("show-overflow");
  links.forEach((link) => {
    setTimeout(function () {
      link.style.transform = "translateX(400%)";
    }, 1000);
  });
}

// detect the height of inner content and set the height of the wrapper to match
function setHeight() {
  const wrapper = document.getElementById("wrapper");
  const innerContentHeight =
    document.querySelector(".inner-content").offsetHeight;
  console.log(innerContentHeight);
  wrapper.style.height = innerContentHeight + "px";
}
setHeight();

window.addEventListener("resize", setHeight);

// expand panels (skills section)
panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// mockups slide right (projects section)
const mockups = document.querySelectorAll(".mockup");

window.addEventListener("scroll", checkMockups);

checkMockups();

function checkMockups() {
  const triggerBottom = window.innerHeight * 0.85;

  mockups.forEach((mockup) => {
    const mockupTop = mockup.getBoundingClientRect().top;

    if (mockupTop < triggerBottom) {
      mockup.classList.remove("mockup");
      mockup.classList.add("slide-right");
    } else {
      mockup.classList.remove("slide-right");
      mockup.classList.add("mockup");
    }
  });
}

// contact form
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("message");
// const form = document.getElementById("form");
// const error = document.getElementById("error");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (this.name.value === "") {
//     this.name.style.background = "url(images/icon-error.svg) no-repeat 96% 50%";
//     error.innerText = "Please complete all fields";
//   }
//   if (this.email.value === "") {
//     this.email.style.background =
//       "url(images/icon-error.svg) no-repeat 96% 50%";
//     error.innerText = "Please complete all fields";
//   }
//   if (this.name.value === "") {
//     this.message.style.background =
//       "url(images/icon-error.svg) no-repeat 98% 50%";
//     error.innerText = "Please complete all fields.";
//   }
// });
