function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return nums.map(function (n) {
    return n * n;
  });
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let result = words
    .toString()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  for (let i = 0; i <= ingredient.length; i++) {
    if (menu !== ingredient[i]) {
      return false;
    }
    else { 
      return true;
    }
    
  }
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
    
    let toMap = {};
    let result = arr1 + arr2;
    for (let n = 0; n < arr1.length || arr2.length; n++) {

        if (toMap[arr1[n]]) {
          result
          
        }
        else {
          result
        }
        return toMap[arr1[n]] = arr1;
    }
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
