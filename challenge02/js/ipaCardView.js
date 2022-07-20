const getSymbolSpan = (symbol) => {
  let span = document.createElement("span");
  span.className = "symbol";
  span.innerText = symbol;
  return span;
}

const getExamplesSpan = (examples) => {
  let span = document.createElement("span");
  span.className = "examples";
  span.innerText = examples;
  return span;
}

const getDescriptionSpan = (description) => {
  let span = document.createElement("span");
  span.className = "description";
  span.innerText = description;
  return span;
}

const getAudio = (audioPath) => {
  let audio = document.createElement("audio");
  audio.className = "audio";
  audio.src = audioPath;
  return audio;
}

const getPlayButton = () => {

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
  resetButton.appendChild(getFailIcon());
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
  resetButton.appendChild(getSuccessIcon());
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
  flipIcon.className = "fa-solid fa-trash-can";
  return flipIcon;
}

const getFlipButton = () => {
  let flipButton = document.createElement("button");
  flipButton.className = "flip";
  flipButton.appendChild(getFlipIcon());
  return flipButton;
}

export default class IPACardView {
  renderCardFront(card, element){
    while (element.firstChild){
      element.removeChild(element.firstChild);
    }
    // element.innerHTML = 
    throw new error('not implemented');
  }
  renderCardBack(card, element){
    throw new error('not impelented');
  }
  
  getTaskRow = (card) => {
    let row = document.createElement("tr");
    row.id = card.id.toString();
    row.className = "task";
    row.appendChild(getSuccessSpan(!card.isOpen));
    row.append(getDescriptionSpan(card.description));
    row.append(getResetSpan());
    return row;
  }
}