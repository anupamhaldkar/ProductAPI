function findUniqueElements(arr) {
  const uniqueArray = [];
  const encountered = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (!encountered.hasOwnProperty(element)) {
      uniqueArray.push(element);
      encountered[element] = true;
    }
  }

  return uniqueArray;
}


const inputArray = [1, 2, 3, 2, 4, 3, 5, 6, 5];


const result = findUniqueElements(inputArray);
console.log("Unique elements:", result);
