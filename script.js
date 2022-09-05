const adviceBtn = document.getElementById("advice-btn");
const adviceEl = document.getElementById("advice-el");

adviceBtn.addEventListener("click", getRandom);

window.onload = () => {
  getRandom();
};

function getRandom() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceObject = adviceData.slip;
      adviceEl.textContent = adviceObject.advice;
    })
    .catch((error) => {
      console.log(error);
    });
}
