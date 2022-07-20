export default class IPACard {
  constructor(ipaGroup, ipaID, symbolString, examples, description, audioAddress = null, reviewCount = 0, learned = null) {
    this.ipaGroup = ipaGroup;
    this.id = ipaID;
    this.symbol = symbolString[1];
    this.examples = examples;
    this.description = description;
    this.audioAddress = audioAddress ? audioAddress : getAudioAddress(ipaGroup, ipaID, symbolString);
    this.reviewCount = reviewCount;
    this.learned = learned;
  }
}

const getAudioAddress = (ipaGroup, ipaID, symbolString) => 
  symbolString.length < 4 ? null : `/resources/audio/${ipaGroup}/${ipaID}.ogg`;