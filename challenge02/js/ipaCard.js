export default class IPACard {
  constructor(ipaGroup, ipaID, cardData) {
    this.group = ipaGroup;
    this.id = ipaID;
    this.symbol = getSymbol(ipaGroup, cardData.Symbol);
    this.examples = cardData.Examples;
    this.description = cardData.Description;
    this.audioAddress = getAudioAddress(ipaGroup, ipaID, cardData.Symbol);
    this.learned = undefined;
  }
}

const getSymbol = (group, symbolString) => {
  if (group.includes('Signs')){
    let symbol = symbolString.replace('[', '');
    return symbol.replace(']', '');
  }
  else{
    return symbolString[1];
  }
}

const getAudioAddress = (ipaGroup, ipaID, symbolString) => 
  symbolString.includes('listen') ? `/resources/audio/${ipaGroup}/${ipaID}.ogg` : undefined;