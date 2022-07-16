export default class APIHandler {
  constructor() {
    this.baseURL = `https://www.wikitable2json.com/api/Help:IPA?table=`;
    this.ipaKey = `&keyRows=1`;
    this.symbolsTableID = `0`;
    this.marksTableID = `1`;
  }

  ipaSymbolEndpoint = () => `${this.baseURL}${this.symbolsTableID}${this.ipaKey}`;
  ipaMarksEndpoint = () => `${this.baseURL}${this.marksTableID}${this.ipaKey}`;

  
}


const getJSON = (endpoint) => {
  return fetch(endpoint)
    .then(response => 
      {
        if (!response.ok)
          throw Error(response.statusText);
        
        return response.json();
      })
    .catch(error => console.log(error));
};