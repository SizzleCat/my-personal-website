// loading animation
const wrapper = document.getElementById("wrapper");
wrapper.style.display = "none";

const loading = document.getElementById("loading");
const loadAnimation = document.getElementById("loading-animation");

function checkLoading() {
  console.log("trying");
  setTimeout(() => {
    if (document.readyState === "complete") {
      loading.style.display = "none";
      wrapper.style.display = "block";
    } else {
      checkLoading();
    }
  }, 1000);
}
document.onreadystatechange = checkLoading();
