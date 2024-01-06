function reverseMessage(str) {
    let wrdChanged = [];
    let reverseStr = str.toLowerCase().split(' ').reverse()
    reverseStr.forEach((wrd)=>{
      let revwrd = wrd.split('').reverse().toString('').replaceAll(',', '')
      let front = revwrd.substring(0,1).match(/[A-Z]/gi) ? revwrd.substring(0,1).toUpperCase(): revwrd.substring(0,1);
      let back = revwrd.substring(1,);
      let newWrd = front+back
      wrdChanged.push(newWrd);
    });
     return wrdChanged.toString(' ').replaceAll(',', ' ');
   }

console.log(reverseMessage("Today is the 14th of January!"))
console.log(reverseMessage("Hello there"))
console.log(reverseMessage("Reverse this message!"))
console.log(reverseMessage("hty56hA T76#Td"))
console.log(reverseMessage("AaaaA"))
console.log(reverseMessage(""))