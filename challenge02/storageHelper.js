const cardsKey = "cards";

export const saveCards = (cards) => {
  let storageItem = JSON.stringify(cards);
  window.localStorage.setItem(cardsKey, storageItem);
}

export const loadCards = () => {
  let storageItem = window.localStorage.getItem(cardsKey);
  if (!storageItem)
    return [];
  return JSON.parse(storageItem);
}