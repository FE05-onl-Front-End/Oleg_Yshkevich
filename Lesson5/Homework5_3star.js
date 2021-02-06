// Задание из презентации со звездочкой
let usersAarray = {
  ivanov: '1',
  petrov: '5',
  sidorov: '10'
}

let array = [];

Object.keys(usersAarray).forEach((item, index) => {
  let status='';
  if (['1','2','3'].includes(usersAarray[item])){
    status = 'двоечник';
  }
  else if (['4','5','6','7'].includes(usersAarray[item])){
    status = 'хорошист';
  }
  else if (['8','9','10'].includes(usersAarray[item])){
    status = 'отличник';
  }

  array.push({name: item, rating: usersAarray[item], status: status});
  }
);

console.log(array)

