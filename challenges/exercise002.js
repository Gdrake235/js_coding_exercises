function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person !== person )
  return false;
  else return true
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  
  
 /*  for (let n = 0; n < people.length; n++){
    var bus = on - off;
    let amount = people[n];
    let on = amount[0];
    let off = amount[1];
    bus += on
    bus -= off
    

  }

   return bus;
 */
     /*  var on = 0;
 3     var of = 0;
 4     for(var i=0; i<people.length; i++){
 5       on += people[i][0]
 6       of += people[i][1]
 7     }   
 8   var total = on-of;
 9   return total; */

  return people.toString().length;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
console.log(arr);

 /*  let total = 0;
  for (let s = 0; i < arr.length; s++) {
    if (arr[s]) total += 1;
  }
  return total; */
  
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
