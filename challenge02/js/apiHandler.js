export function getJSON(endpoint) {
  return fetch(endpoint)
    .then(response => 
      {
        if (!response.ok)
          throw Error(response.statusText);
        
        return response.json();
      })
    .catch(error => console.log(error));
};