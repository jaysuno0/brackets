module.exports = function check(str, bracketsConfig){
  let resultString = str;
  bracketTypes = bracketsConfig.map(type => type.join(''));

  for (let i = 0; i < str.length / 2; i++) {
    bracketTypes.forEach(bracket => resultString = resultString.replace(bracket, ''));
  }

  return resultString.length === 0;
}