let sayHello = () => {
    return "Hello";
};

let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

let add = (a , b) => {
    return a + b;
};

module.exports = {
  sayHello,
  reverseString,
  add
};