const animals = [
  {
    animalType: "Лев",
    animalName: "Лёва",
    weight: 100,
    isHealthy: true,
    warden: {
     name: "Игорь",
     age: 72
    }
  },
  {
    animalType: "Тигр",
    animalName: "Никита",
    weight: 120,
    isHealthy: true,
    warden: {
     name: "Игорь",
     age: 72
    }
  },
  {
    animalType: "Таракан",
    animalName: "Саша",
    weight: 95,
    isHealthy: false,
    warden: {
     name: "Каратель",
     age: 23
    }
  },
 ];
 
 const menu= () =>{
   let selection = prompt(`
   Пожалуйста, выберете необходимое действие:
   1. Для просмотра всего списка животных зоопарка, пожалуйста, введите "1";
   2. Для добавления нового животного, пожалуйста, введите "2";
   3. Для удаления животного, пожалуйста, введите "3";
   4. Для изменения данных животного, пожалуйста, введите 4;
   `);

   switch(selection){
    case '1': showAnimals(animals);
      alert('Выведенную информацию можно посмотреть в консольке (f12)')
      break;
    case '2': addAnimal();
      break;
    case '3': deleteAnimal(prompt('Введите тип животного, которого хотите удалить:'), 
                           prompt('Введите имя животного, которого хотите удалить:'));
      break;
    case '4': changeAnimal();
      break;

    default: alert('Введенные данные не соответствуют ожиданиям главного меню');
      break;
  }
}

showAnimals = (dataAnimals) => { //Функция просмотра всех животных зоопарка
  console.log('Список наших животных:')
  for (let i = 0; i < dataAnimals.length; i++) {
    let isHealthy;
    if (dataAnimals[i].isHealthy == true) {
      isHealthy = 'животное полностью здорово';
    } else {
      isHealthy = 'животное болеет' ;
    }
    console.log(`Тип животного: ${dataAnimals[i].animalType};
Имя животного: ${dataAnimals[i].animalName};
Вес животного: ${dataAnimals[i].weight};
Состояние здоровья: ${isHealthy};
Имя ответственного за животное: ${dataAnimals[i].warden.name};
Возраст ответственного за животное: ${dataAnimals[i].warden.age}.`)
  }
}

addAnimal = () => { //функция добавления нового зверя
  animals.push({
    animalType: prompt('Пожалуйста, введите тип (название) животного:'),
    animalName: prompt('Пожалуйста, введите имя животного:'),
    weight: prompt('Пожалуйста, введите вес животного:'),
    isHealthy: prompt(`Пожалуйста, введите данные о состоянии здоровья животного 
    "true" - если здорово; "false" - если болеет`),
    warden: {
      name: prompt(`Пожалуйста, введите имя смотрителя`),
      age: prompt(`Пожалуйста, возраст смотрителя`)
     }
  });
  console.log('Животное успешно добавлено!')
}

deleteAnimal = (deleteAnimalType, deleteAnimalName) => { // Функция удаления зверя по имени и типу
  let isSerch = false;
  for(let i = 0; i < animals.length; i++){
      if (animals[i].animalName.toLowerCase() == deleteAnimalName.toLowerCase() &&
      animals[i].animalType.toLowerCase() == deleteAnimalType.toLowerCase()){
          animals.splice(i, 1);
          console.log(`Животное удалено`)
          isSerch = true;
      }
  }
  if (isSerch == false) {
    console.log(`Животное с указанными параметрами не найдено`)
  }
}


changeAnimal = () => { // Функция изменения данных
  changeAnimalName = prompt('Введите имя животного, данные которого хотите изменить:');
  changeAnimalType = prompt('Введите тип животного, данные которого хотите изменить:');
  let isSerch = false;
  for(let i = 0; i < animals.length; i++){
      if (animals[i].animalName.toLowerCase() == changeAnimalName.toLowerCase() &&
          animals[i].animalType.toLowerCase() == changeAnimalType.toLowerCase()){
          let selection = prompt(`Пожалуйста, выберите данные для изменения:
1. Тип животного;
2. Имя животного;
3. Вес;
4. Состояние здоровья;
5. Имя смотрителя
6. Возраст смотрителя`)
      switch(selection){
          case '1': animals[i].animalType = prompt('Введите новый тип(вид) для выбранного животного:');
            break;
          case '2': animals[i].animalName = prompt('Введите новое имя для выбранного животного:');
            break;
          case '3': animals[i].weight = prompt('Введите новый вес для выбранного животного:');
            break;
          case '4': animals[i].isHealthy = prompt(`Введите новые данные о состоянии здоровья выбранного животного
"true" - если здорово; "false" - если болеет`);
            break;
          case '5': animals[i].warden.name = prompt(`Введите имя нового смотрителя`);
            break;
          case '6': animals[i].warden.age = prompt(`Введите новый возраст смотрителя`);
            break;
          default: alert('Введенные данные не соответствуют ожиданиям меню');
            break;
      }
      console.log(`Спасибо, параметры успешно изменены!`)
      isSerch = true;
    }
  }
  if (isSerch == false) {
    console.log(`Животное с указанными параметрами не найдено`)
  }
}



let action = "Продолжить"; //главный блок для зацикливания меню
while(action.toLowerCase() == "продолжить"){ 
menu();
action = prompt('Если желаете продолжить работать с программой, пожалуйста, напишить "продолжить"');
if(action.toLowerCase() != "продолжить"){
    alert('Было приятно пообщаться)');
}
}
