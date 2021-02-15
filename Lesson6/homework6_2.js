const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];


const isEqual = (firstArray, secondArray) => {
    let equally = true;
  
    if (firstArray.length != secondArray.length) {
        equally = false;
    } else {
        firstArray.forEach((item, index) => {
            item == secondArray[index] ? null : (equally = false);
        });
    }
    
    return equally;
  };
  
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false