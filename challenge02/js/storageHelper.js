const cardsKey = "cards";

export const saveDeck = (cards) => {
  let storageItem = JSON.stringify(cards);
  window.localStorage.setItem(cardsKey, storageItem);
}

export const loadDeck = () => {
  let storageItem = window.localStorage.getItem(cardsKey);
  if (!storageItem)
    return [];
  return JSON.parse(storageItem);
}