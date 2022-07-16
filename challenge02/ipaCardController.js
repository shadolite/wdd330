import IPACard from "./ipaCard";
import IPACardView from "./ipaCardView";

export default class IPACardController {
  constructor(parent) {
    this.cards = getCards();
    this.cardView = new IPACardView();
  }

  getCards(){

  };
}

const parseCards = (ipaData) => {
  
}