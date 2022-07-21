import IPADeckController from "./ipaDeckController.js";

const deckController = new IPADeckController();

const getFilterType = () => {
  let selectedButton = document.getElementsByClassName('selected')[0];
  let filter = selectedButton.id;
  return filter;
}

const getFilterButtons = () =>
  [...document.getElementsByClassName("filter")];

const updateSelectedClass = (event) => {
  if (event.classList.value.includes('selected'))
    return;

  getFilterButtons().forEach(el => {
    el.classList.remove('selected');
  })

  event.classList.add('selected');
}

function filterHandler(event) {
  updateSelectedClass(event);
  deckController.loadDeck(getFilterType());
}

const addFilterListeners = () => {
  getFilterButtons().forEach(element => {
    element.addEventListener("click", function () {
      filterHandler(this);
    });
  });
}

function resetHandler() {
  if (confirm("Are you sure you want to reset reviews for all cards?")){
    deckController.clearReviews();
    deckController.loadDeck(getFilterType());
  }
}

const addResetListener = () => {
  let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", function () {resetHandler()});
}

window.onload = () => {
  addFilterListeners();
  addResetListener();
  // deckController.initialize();
}