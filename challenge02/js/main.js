import IPADeckController from "./ipaDeckController.js";

async function loadApp() {
  const deckController = new IPADeckController();
  await deckController.initialize();
}

window.onload = () => {
  loadApp();
}