const data = [1, 2, 3];



const reverse = (array) => {
    reverseArray=[];
    for (let i = 0; i<array.length; i++){
        reverseArray.push(array[array.length-i-1]);
    }
    return reverseArray;
}
console.log(reverse(data)); // [3, 2, 1]