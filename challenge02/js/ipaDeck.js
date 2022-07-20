import IPACard from "./ipaCard.js"
import { saveDeck, loadDeck } from "./storageHelper.js";
import { getJSON } from "./apiHandler.js";

export default class IPADeck {
  constructor() {
    this.symbolsURL = `https://www.wikitable2json.com/api/Help:IPA?table=0&keyRows=1`;
    this.baseURL = `https://www.wikitable2json.com/api/Help:IPA?table=`;
    this.ipaKey = `&keyRows=1`;
    this.symbolsTableID = `0`;
    this.marksTableID = `1`;
    this.ipaSymbolEndpoint = `${this.baseURL}${this.symbolsTableID}${this.ipaKey}`;
    this.ipaMarksEndpoint = `${this.baseURL}${this.marksTableID}${this.ipaKey}`;
    this.cards = [];
  }

  getAllCards = () => this.cards;
  getNewCards = () => this.cards.filter(c => c.learned == null);
  getFailedCards = () => this.cards.filter(c => c.learned == false);
  getLearnedCards = () => this.cards.filter(c => c.learned == true);

  async loadCards () {
    let savedCards = loadDeck();

    if (savedCards.length < 1){
      let symbols = await getJSON(this.symbolsURL);
      let marks = await getJSON(this.ipaMarksEndpoint);
      savedCards.push(...parseCards(symbols));
      savedCards.push(...parseCards(marks));
    }

    return savedCards;
  }

  saveCards = () => {
    saveDeck(cards);
  }
}

const parseCards = (ipaData) => {
  let tableData = ipaData[0];
  let group;
  let groupCardID = 0;
  const cards = new Array();

  for (let i = 0; i < tableData.length; i++){
    if (tableData[i].Description[0] == '^'){
      group = tableData[i].Description[tableData[i].Description.length - 1];
      if (group == 's'){
        group = 'Others';
      }
      groupCardID = 0;
    }
    else{
      cards.push(new IPACard(group, groupCardID, tableData[i].Symbol, tableData[i].Examples, tableData[i].Description));
      groupCardID++;
    }
  }

  return cards;
}