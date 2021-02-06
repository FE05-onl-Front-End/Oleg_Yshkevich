// задание из презентации
let usersAge = {
  ivanov: '19',
  petrov: '17',
  sidorov: '21'
}

let array = [];

Object.keys(usersAge).forEach((item, index) => {
  array.push({name: item, age: usersAge[item]});
  }
);

console.log(array)

