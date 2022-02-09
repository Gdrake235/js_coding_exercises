function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  /*  var min = nums[0]; */

  var min = nums[0];
  nums.sort();
  /*   return nums.reverse(); */
  for (var i = nums.length; i >= 0; i--) {
    /*   min += nums[i] */
    min = nums[i]; /* .reverse(); */
  }

  return min;

  /*  var anyWord = '';
  for ( var i = word.length -1; i >= 0; i-- ) {
    anyWord += word[i]
  }

  return anyWord

} */
  /* nums[0]; */
  /* return nums.reverse(); */
  /*  nums.sort();
  nums[0]
  return nums.reverse(); */
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var result = names
    .charAt(0) /* .toUpperCase() + names.slice(1); */
    .find((el) => el.length < 13);
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  var arr = users;
  console.log(arr);
  const result = arr.map(([id, data, { city }]) => ({
    id,
    data,
    city: city
      .split("|")
      .map((cityData) => cityData.split("~"))
      .map(([city_name]) => ({ city_name })),
  }));

  return result;

  /* return users */
  /*  let count = 0
  for (let i = 0; i < users.length; i++) {
    if (users[i]['lives']['city'] === 'Valencia') {
      count++;
    }
  }
  return users */

  /* users.findIndex(checkCity);

function checkCity(users) {
  return users = users.city;
} */
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const transform = (triangles = []) => {
    triangles.sort((a, b) => a - b);
    for (let i = triangles.length - 1; i >= 2; i--) {
      let start = i - 2;
      let end = i - 1;
      while (start < end) {
        if (triangles[end] + triangles[start] > triangles[i]) {
          return triangles[end] + triangles[start] + triangles[i];
        } else {
          start++;
        }
      }
    }
    return 0;
  };
  return transform(triangles);
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
