export default class IPACard {
  constructor(ipaGroup, ipaID, symbolString, examples, description, audioAddress = null, reviewCount = 0, failed = true) {
    this.ipaGroup = ipaGroup;
    this.id = ipaID;
    this.symbol = symbolString[1];
    this.examples = examples;
    this.description = description;
    this.audioAddress = audioAddress ? audioAddress : getAudioAddress(ipaGroup, ipaID, symbolString);
    this.reviewCount = reviewCount;
    this.failed = failed;
  }
}

const getAudioAddress = (ipaGroup, ipaID, symbolString) => 
  symbolString.length < 4 ? null : `/resources/audio/${ipaGroup}/${ipaID}.ogg`;