const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  for (var i = 0; i < n; i++) {
    return nums.push(i);
  }

};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var count = 0;

  for (var i = 0, length = str.length; i < length; i++) {
    count += Number(str[i]);
  }

  return {
    0: str.length - count,
    1: count,
  };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  var num,
    result = 0;

  while (n) {
    num = n % 10;
    result = result * 10 + num;
    n = (n / 10) | 0;
  }

  return result;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
   var result = 0;
   for (var n = 0; n < arrs.length; ++n) {
     result += arrs[n];
   }
   return result;
/*   var result = arrs.reduce(function (a, b) {
    return a + b;
  }, 0);
  return result */
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
 

  // ⛔️ Uncaught TypeError: str.includes is not a function
  /* const result = haystack.includes(searchTerm); 
    return result
  */

  
  const result = haystack.toString().includes(searchTerm);
  return result; 
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  var word = str
    .split(" ")
    .toString()
    .toLowerCase()
    .match(/\w+(?:'\w+)*/g);
  var arr = {};

  for (var i = 0; i < word.length; i++) {
    if (arr[word[i]]) {
      arr[word[i]] += 1;
    } else {
      arr[word[i]] = 1;
    }
  }

  return arr;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
