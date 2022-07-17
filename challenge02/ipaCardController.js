import IPACard from "./ipaCard";
import IPACardView from "./ipaCardView";
import { saveCards, loadCards } from "./storageHelper";
import { getJSON } from "./apiHandler";

export default class IPACardController {
  constructor(parent) {
    this.baseURL = `https://www.wikitable2json.com/api/Help:IPA?table=`;
    this.ipaKey = `&keyRows=1`;
    this.symbolsTableID = `0`;
    this.marksTableID = `1`;
    this.ipaSymbolEndpoint = `${this.baseURL}${this.symbolsTableID}${this.ipaKey}`;
    this.ipaMarksEndpoint = `${this.baseURL}${this.marksTableID}${this.ipaKey}`;
    this.cards = getCards();
    this.cardView = new IPACardView();
  }

  getCards(){
    let savedCards = loadCards();

    if (!savedCards){
      savedCards.push(...parseCards(getJSON(this.ipaSymbolEndpoint)));
      savedCards.push(...parseCards(getJSON(this.ipaMarksEndpoint)));
    }

    return savedCards;
  };
}

const parseCards = (ipaData) => {
  let tableData = ipaData[0];
  let group;
  let groupCardID = 0;
  const cards = new Array();

  for (let i = 0; i < tableData.length; i++){
    if (tableData[i].Description[0] == '^'){
      group = tableData[i].Description[tableData[i].Description.length - 1];
      groupCardID = 0;
    }
    else{
      cards.push(new IPACard(group, groupCardID, tableData[i].Symbol, tableData[i].Examples, tableData[i].Description));
      groupCardID++;
    }
  }

  return cards;
}