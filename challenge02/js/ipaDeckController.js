import IPACardView from "./ipaCardView.js";
import IPADeck from "./ipaDeck.js";

const deck = new IPADeck();
deck.loadCards();
const cardView = new IPACardView();
const filteredDeck = { 
  currentIndex: 0,
  cards: deck.getAllCards()
};

function flipCardHandler(event){
  loadCardBack();
}

function playAudioHandler(event){
  const audio = document.getElementsByClassName("audio")[0];
  audio.currentTime = 0;
  audio.play();
}

function failCardHandler(event){
  updateCard(false);

  let filter = getFilterType();
  if (filter == "failed" || filter == "all"){
    loadNextCard();
  }
  else{
    loadDeck(filter);
  }
}

const updateCard = (learned) => {
  const card = filteredDeck.cards[filteredDeck.currentIndex];
  card.learned = learned;
  deck.saveCards();
}

function learnCardHandler(event){
  updateCard(true);

  let filter = getFilterType();
  if (filter == "learned" || filter == "all"){
    loadNextCard();
  }
  else{
    loadDeck(filter);
  }
}

const addFrontListeners = () => {
  const flipButton = document.getElementById("flipButton");
  flipButton.addEventListener('click', () => flipCardHandler);
}

const addBackListeners = () => {
  const playButton = document.getElementById("playButton");
  if (playButton){
    playButton.addEventListener('click', () => playAudioHandler);
  }

  const failButton = document.getElementById("failButton");
  failButton.addEventListener('click', () => failCardHandler);

  const successButton = document.getElementById("successButton");
  successButton.addEventListener('click', () => learnCardHandler);
}

export const getFilterType = () => {
  let selectedButton = document.getElementsByClassName('selected')[0];
  let filter = selectedButton.id;
  return filter;
}

  export const clearReviews = () => {
    throw new error('not implemented');
  }

  export const loadDeck = (filter) => {
    switch (filter) {
      case "new":
        filteredDeck.cards = deck.getNewCards();
        break;
      case "failed":
        filteredDeck.cards = deck.getFailedCards();
        break;
        case "learned":
          filteredDeck.cards = deck.getLearned();
          break;
      default:
        filteredDeck.cards = deck.getAllCards();
    }
    
    filteredDeck.currentIndex = 0;
    loadCardFront();
  }

  const loadCardFront = () => {
    cardView.renderCardFront(filteredDeck.cards[filteredDeck.currentIndex]);
    addFrontListeners();
  }

  const loadCardBack = () => {
    cardView.renderCardBack(filteredDeck.cards[filteredDeck.currentIndex]);
    addBackListeners();
  }

  const loadNextCard = () => {
    if (filteredDeck.cards.length < 1){
      throw new error('not implemented');
    }

    if (filteredDeck.cards.length == filteredDeck.currentIndex + 1){
      filteredDeck.currentIndex = 0;
    }
    else{
      filteredDeck.currentIndex++;
    }

    loadCardFront();
  }