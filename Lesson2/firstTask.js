let data = {
    name: 'Артур',
    ourLost: 1000,
    ourArmy: 5000,
    enemiesLost: 10000,
    enemiesArmy: 12000,
  }
  
console.log(
`Король ${data.name}, мы победили вражескую армию в ${data.enemiesArmy}! 
Враг бежит, оставив на поле боя ${data.enemiesLost} павших воинов. 
Наши потери король ${data.name} составили ${data.ourLost} героически павших воинов 
от всей нашей армии в ${data.ourArmy} солдат! Мы победили, сохранив ${data.ourArmy-data.ourLost} воинов. 
И можем продолжить преследовать остатки вражеской армии в ${data.enemiesArmy-data.enemiesLost} солдат. 
С победой король ${data.name}!!`
)