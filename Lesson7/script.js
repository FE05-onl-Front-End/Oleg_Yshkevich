const generateArray = () => {  
    let array = [];
    while (array.length < 100) {
        let random = Math.floor(Math.random() * 100) + 1;
        let numberAdd = (randomNumber) => {
            if (array.includes(randomNumber) === false) {
                array.push(randomNumber);
            }
        };
        numberAdd(random);
    }
    return array;
}
  

console.log(generateArray());
