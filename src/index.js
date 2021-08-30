module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let n = 0;
  
  for (let i = 0; i < str.length; i++) {
    let j = 0;
    let time = true;
    while ((j < bracketsConfig.length) && time) {

     let a = bracketsConfig[j].indexOf(str[i]);
     let c = bracketsConfig[j].lastIndexOf(str[i]);
     if (a !== c) {
       console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
       n += 1;
       j++;
       break;
     }
     console.log(`let a = ${a}, j = ${j}, item = ${str[i]}`);
    
       switch (a) {
        case -1:
          j++;
          break;
       case 0:
         stack.push(`${j}.${a}`);
         console.log(`case 0: ${j}.${a}`);
         time = false;
         continue;
         //break;
       case 1:
         if (stack.length < 1) {
           return false
          }
         let b = stack.pop().split('.');
         //console.log(`d - ${d}`);
         //let b = d.split('.');
         console.log(`b = ${b[0]}, ${b[1]} i=${i} j=${j}`);
         if ((b[0] == j)&&(b[1] == 0)) {
           console.log(`true`);
           time = false;
           continue;
         } else {
           console.log(`else`);
           time = false;
           return false
         }
         //continue;
         //break;
       }
      
     }
  }

  return (stack.length === 0)&&(n % 2 ===0);
};

/*const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

console.log(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6));
*/