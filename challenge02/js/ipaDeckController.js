import IPACardView from "./ipaCardView.js";
import IPADeck from "./ipaDeck.js";

export default class IPADeckController {
  constructor(parent) {
    this.deck = new IPADeck();
    this.cardView = new IPACardView();
  }

  initialize(){
    this.deck.loadCards();
    console.log(this.deck.getAllCards());
  }

  clearReviews(){

  }

  loadDeck(filter){

  }
}