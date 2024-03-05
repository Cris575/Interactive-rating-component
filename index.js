const submitButton = document.getElementById("button");
const optionButtons = document.querySelectorAll(".focus");
const cardElements = document.querySelectorAll(".card");
const selectedNumberElement = document.querySelector(".selected-number");
let selectedNumber;

optionButtons.forEach((button) => {
  button.addEventListener("focus", () => {
    selectedNumber = button.value;
  });
});

submitButton.addEventListener("click", () => {
  cardElements.forEach((card) => card.classList.toggle("hidden"));
  selectedNumberElement.innerText = `You selected ${selectedNumber} out of 5`;
});
