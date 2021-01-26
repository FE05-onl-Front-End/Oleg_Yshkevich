data.name = prompt('Пожалуйста, введите имя короля:')
data.ourArmy = prompt('Введите численность нашей армии:')
data.ourLost = prompt('Введите потери нашей армии:')
data.enemiesArmy = prompt('Введите численность вражеской армии:')
data.enemiesLost = prompt('Введите потери вражеской армии:')
  
console.log(
`Король ${data.name}, мы победили вражескую армию в ${data.enemiesArmy}! 
Враг бежит, оставив на поле боя ${data.enemiesLost} павших воинов. 
Наши потери король ${data.name} составили ${data.ourLost} героически павших воинов 
от всей нашей армии в ${data.ourArmy} солдат! Мы победили, сохранив ${data.ourArmy-data.ourLost} воинов. 
И можем продолжить преследовать остатки вражеской армии в ${data.enemiesArmy-data.enemiesLost} солдат. 
С победой король ${data.name}!!`
)