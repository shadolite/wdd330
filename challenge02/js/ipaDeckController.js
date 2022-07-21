import IPACardView from "./ipaCardView.js";
import IPADeck from "./ipaDeck.js";


const getFilterButtons = () =>
[...document.getElementsByClassName("filter")];

function updateSelectedClass(event) {
  if (event.target.classList.value.includes('selected'))
    return;

  getFilterButtons().forEach(el => {
    el.classList.remove('selected');
  })

  event.classList.add('selected');
}
export default class IPADeckController{
  constructor(){
    this.deck = new IPADeck();
    this.cardView = new IPACardView();
    this.filteredDeck = { 
      currentIndex: 0,
      cards: undefined
    };
  }

  async initialize(){
    await this.deck.loadCards().then((result) =>{
      this.filteredDeck.cards = result;
      this.addFilterListeners();
      this.addResetListener();
      this.loadCardFront();
    });
  }
  
  
  filterHandler(event) {
    updateSelectedClass(event);
    this.loadFilteredDeck(this.getFilterType());
  }
  
  addFilterListeners = () => {
    getFilterButtons().forEach(element => {
      element.addEventListener("click", (event) => {this.filterHandler(event)});
    });
  }
  
  resetHandler(controller) {
    if (confirm("Are you sure you want to reset reviews for all cards?")){
      this.clearReviews();
      this.loadFilteredDeck(getFilterType());
    }
  }
  
  addResetListener = () => {
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", this.resetHandler);
  }

  flipCardHandler(controller){
    controller.loadCardBack();
  }

  playAudioHandler(controller){
    const audio = document.getElementsByClassName("audio")[0];
    audio.currentTime = 0;
    audio.play();
  }

  failCardHandler(controller){
    controller.updateCard(false);

    let filter = getFilterType();
    if (filter == "failed" || filter == "all"){
      controller.loadNextCard();
    }
    else{
      controller.loadFilteredDeck(filter);
    }
  }

  updateCard = (learned) => {
    const card = this.filteredDeck.cards[this.filteredDeck.currentIndex];
    card.learned = learned;
    this.deck.saveCards();
  }

  learnCardHandler(controller){
    const card = controller.filteredDeck.cards[controller.filteredDeck.currentIndex];
    controller.deck.cards.filter(c => c.group == card.group && c.id == card.id)[0].learned = true;
    controller.deck.saveCards();
    controller.updateCard(true);

    let filter = getFilterType();
    if (filter == "learned" || filter == "all"){
      controller.loadNextCard();
    }
    else{
      controller.loadFilteredDeck(filter);
    }
  }

  addFrontListeners = () => {
    const flipButton = document.getElementById("flipButton");
    flipButton.addEventListener('click', () => {
      this.flipCardHandler(this);
    });
  }

  addBackListeners = () => {
    const playButton = document.getElementById("playButton");
    if (playButton){
      playButton.addEventListener('click', () => this.playAudioHandler);
    }

    const failButton = document.getElementById("failButton");
    failButton.addEventListener('click', () => {
      this.failCardHandler(this);
    });

    const successButton = document.getElementById("successButton");
    successButton.addEventListener('click', () => {
      this.learnCardHandler(this);
    });
  }

  getFilterType = () => {
    let selectedButton = document.getElementsByClassName('selected')[0];
    let filter = selectedButton.id;
    return filter;
  }

  clearReviews = () => {
    throw new error('not implemented');
  }

  loadFilteredDeck = (filter) => {
    switch (filter) {
      case "new":
        this.filteredDeck.cards = this.deck.getNewCards();
        break;
      case "failed":
        this.filteredDeck.cards = this.deck.getFailedCards();
        break;
        case "learned":
          this.filteredDeck.cards = this.deck.getLearned();
          break;
      default:
        this.filteredDeck.cards = this.deck.getAllCards();
    }
    
    this.filteredDeck.currentIndex = 0;
    this.loadCardFront();
  }

  loadCardFront = () => {
    const card = this.filteredDeck.cards[this.filteredDeck.currentIndex];
    if (card){
      this.cardView.renderCardFront(card);
      this.addFrontListeners();
    }
  }

  loadCardBack = () => {
    const card = this.filteredDeck.cards[this.filteredDeck.currentIndex];
    if (card){
      this.cardView.renderCardBack(card);
      this.addBackListeners();
    }
  }

  loadNextCard = () => {
    if (this.filteredDeck.cards.length < 1){
      throw new error('not implemented');
    }

    if (this.filteredDeck.cards.length == this.filteredDeck.currentIndex + 1){
      this.filteredDeck.currentIndex = 0;
    }
    else{
      this.filteredDeck.currentIndex++;
    }

    this.loadCardFront();
  }
}