import IPACardView from "./ipaCardView.js";
import IPADeck from "./ipaDeck.js";

function flipCardHandler(event){
  throw new error('not implemented');
}

function playAudioHandler(event){
  const audio = document.getElementsByClassName("audio")[0];
  audio.currentTime = 0;
  audio.play();
}

function failCardHandler(event){
  throw new error('not implemented');
}

function learnCardHandler(event){
  throw new error('not implemented');
}


export default class IPADeckController {
  constructor(parent) {
    this.deck = new IPADeck().loadCards();
    this.cardView = new IPACardView();
    this.filteredDeck = deck.getAllCards();
    this.currentCard = this.filteredDeck[0];
  }

  // initialize(){
  //   this.deck.loadCards();
  // }

  clearReviews(){
    throw new error('not implemented');
  }

  loadDeck(filter){
    switch (filter) {
      case "new":
        this.filteredDeck = deck.getNewCards();
        loadCardFront(this.filteredDeck[0]);
        break;
      case "failed":
        this.filteredDeck = deck.getFailedCards();
        loadCardFront(this.filteredDeck[0]);
        break;
        case "learned":
          this.filteredDeck = deck.getLearned();
          loadCardFront(this.filteredDeck[0]);
          break;
      default:
        this.filteredDeck = deck.getAllCards();
        loadCardFront(this.filteredDeck[0]);
    }
    this.currentCard = this.filteredDeck[0];
    this.loadCardFront();
  }

  loadCardFront(){
    throw new error('not implemented');
  }

  loadCardBack(){
    throw new error('not implemented');
  }

  loadNextCard(){
    if (this.filteredDeck.length < 1){
      throw new error('not implemented');
    }

    let index = this.filteredDeck.findIndex(this.currentCard) + 1;
    if (this.filteredDeck.length == index + 1){
      this.currentCard = this.filteredDeck[0];
    }
    else{
      this.currentCard = this.filteredDeck[index];
    }

    this.loadCardFront();
  }
}