const getSymbolSpan = (symbol) => {
  let span = document.createElement("span");
  span.className = "symbol";
  span.innerText = symbol;
  return span;
}

const getExamplesSpan = (examples) => {
  let span = document.createElement("span");
  span.className = "examples";
  span.innerText = `Examples:${examples}`;
  return span;
}

const getDescriptionSpan = (description) => {
  let span = document.createElement("span");
  span.className = "description";
  span.innerText = `Description: ${description}`;
  return span;
}

const getAudio = (audioPath) => {
  let audio = document.createElement("audio");
  audio.className = "audio";
  audio.src = audioPath;
  return audio;
}

const getPlayIcon = () => {
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-volume-low";
  return icon;
}

const getPlayButton = () => {
  let button = document.createElement("button");
  button.classList.add(...["play", "cardButton"]);
  button.id = "playButton"
  button.appendChild(getPlayIcon());
  return button;
}

const getFailIcon = () => {
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  return icon;
}

const getFailButton = () => {
  let button = document.createElement("button");
  button.classList.add(...["fail", "cardButton"]);
  button.id = "failButton"
  button.appendChild(getFailIcon());
  return button;
}

const getSuccessIcon = () => {
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-check";
  return icon;
}

const getSuccessButton = () => {
  let button = document.createElement("button");
  button.classList.add(...["success", "cardButton"]);
  button.id = "successButton"
  button.appendChild(getSuccessIcon());
  return button;
}

const getReviewSpan = () => {
  let span = document.createElement("span");
  span.className = "reviewSpan";
  span.appendChild(...[getFailButton(), getSuccessButton()]);
  return span;
}

const getFlipIcon = () => {
  let flipIcon = document.createElement("i");
  flipIcon.className = "fa-solid fa-repeat";
  return flipIcon;
}

const getFlipButton = () => {
  let flipButton = document.createElement("button");
  flipButton.className = "flip";
  flipButton.id = "flipButton";
  flipButton.innerText = "Flip Card "
  flipButton.appendChild(getFlipIcon());
  return flipButton;
}

const clearElementChildren = (element) => {
  while (element.firstChild){
    element.removeChild(element.firstChild);
  }
}

export default class IPACardView {
  renderCardFront(card){
    let cardElement = document.getElementById("card");
    clearElementChildren(cardElement);
    cardElement.appendChild(getSymbolSpan(card.symbol));
    cardElement.appendChild(getFlipButton());
  }

  renderCardBack(card){
    let breakElement = document.createElement("br");
    let cardElement = document.getElementById("card");
    cardElement.dataset.card = JSON.stringify(card);
    clearElementChildren(cardElement);
    cardElement.appendChild(getSymbolSpan(card.symbol));
    cardElement.appendChild(breakElement);
    if (card.audioAddress){
      cardElement.appendChild(getAudio(card.audioAddress));
      cardElement.appendChild(getPlayButton());
    }
    cardElement.appendChild(breakElement);
    cardElement.appendChild(getExamplesSpan(card.examples));
    cardElement.appendChild(breakElement);
    cardElement.appendChild(getDescriptionSpan(card.description));
    cardElement.appendChild(breakElement);
    cardElement.appendChild(getFailButton());
    cardElement.appendChild(getSuccessButton());
  }
}