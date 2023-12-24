function getCommonElements(arr1, arr2) {
  const occurrenceMap = {};
  const commonArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    occurrenceMap[element] =   1;
  }

  for (let j = 0; j < arr2.length; j++) {
    const element = arr2[j];
    if (occurrenceMap[element] > 0) {
      commonArr.push(element);
      occurrenceMap[element]--; 
    }
  }

  return commonArr;
}

console.log(getCommonElements([1, "2", 3, 4, 4], [1,"2", 1, 5, 4, 3, 7, 6]));
