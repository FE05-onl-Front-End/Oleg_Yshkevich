const data = [1, 2, 1, 2, 3];

const unique = (array) => {
    return Array.from(new Set(array))
   };

console.log(unique(data))