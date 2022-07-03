export default class IPACard {
  constructor(ipaObject) {
    this.symbol = ipaObject.symbol;
    this.sound = ipaObject.sound;
    this.examples = ipaObject.examples;
    this.description = ipaObject.description;
  }
}