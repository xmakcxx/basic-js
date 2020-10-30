const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  let additionString ='';
  if(str === null ){str ='null';}
  if(options.addition === null ){options.addition ='null';}
  if(options.separator == undefined){ options.separator = '+'; }
  if(options.addition == undefined){ options.addition = ''; }
  if(options.additionSeparator == undefined){ options.additionSeparator = '|'; }
  if(options.repeatTimes == undefined){ options.repeatTimes = 0; result = str.toString(); options.separator = '';}
  if(options.additionRepeatTimes == undefined){ options.additionRepeatTimes = 0;  additionString = options.addition.toString(); options.additionSeparator = '';}
  if(options.repeatTimes == 0 && options.additionRepeatTimes == 0){return result = str.toString() + options.addition.toString();}
  
  for (let index = 0; index < +options.additionRepeatTimes; index++) {
   additionString += options.addition.toString()+options.additionSeparator;  
  }
  additionString = additionString.substring(0, (additionString.length - options.additionSeparator.length));
 
  for (let index = 0; index < +options.repeatTimes; index++) {
    result += str.toString() + additionString + options.separator;   
  }
  return result.substring(0,(result.length - options.separator.length));

};
  