module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let i = 0;
  let j = 0;

  while (i < str.length && j < bracketsConfig.length) {
    let leftIndex = bracketsConfig[j].indexOf(str[i]);
    let rigthIndex = bracketsConfig[j].lastIndexOf(str[i]);
        
       switch (leftIndex) {
        case -1:
          j++;
          break;
       case 0:
         if ((rigthIndex !== leftIndex)&&(stack.length > 0)) {
            let test = stack.pop();
            if (test !== str[i]) {
              stack.push(test);
              stack.push(str[i]);
            };
           } else {
             stack.push(str[i]);
           };
           i++;
           j = 0;
           break;

       case 1:
         if (stack.length < 1) {
           return false
          };
         test = stack.pop();
         let openBracket = bracketsConfig[j][0];
         if (test !== openBracket) {
           return false;
         } 
         i++;
         j = 0;
         break;
       }
    }
  return (stack.length === 0);
};