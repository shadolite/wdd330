function writeResult(input, divId) {
  var div = document.getElementById(divId);
  div.innerHTML = input;
};

const getCountSum = function(number, callback) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    result += i;
  }
  
  callback(result, "req02Result");
};

const getSum = (num1, num2, callback) => {
  let result = Number(num1) + Number(num2);
  callback(result, "req03Result");
}

const getDifference = (num1, num2, callback) => {
  let result = Number(num1) - Number(num2);
  callback(result, "req03Result");
}

const getProduct = (num1, num2, callback) => {
  let result = Number(num1)*Number(num2);
  callback(result, "req03Result");
}

const getQuotient = (num1, num2, callback) => {
  let result = Number(num1)/Number(num2);
  callback(result, "req03Result");
}