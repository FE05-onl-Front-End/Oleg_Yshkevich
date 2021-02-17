let modal = document.querySelector('.wrapper');
let firstName = document.querySelector('input[name=first-name]');
let lastName = document.querySelector('input[name=last-name]');
let age = document.querySelector('input[name=age]');
let form = document.querySelector('#userform');

function show() {
    modal.style.display = 'flex';
}
function closeForm() {
    modal.style.display = 'none';
    firstName.value = '';
    lastName.value = '';
    age.value = '';
}

const data = [{
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 17
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];

function createTable(detaAdd) { //создание таблицы и заполнение заголовков
    const arrayTableHeader = Object.keys(detaAdd[0]) //создаю массив с заголовками от первого объекта массива
    const table = document.createElement('table'); //создаю таблицу
        table.id = 'table';
        table.style = "border: 2px solid grey; border-collapse: collapse; margin: 15px 15px 15px 0px";
    document.body.append(table);

    const tableTr = document.createElement('tr') //создаю шапку таблицы
    table.append(tableTr);

    arrayTableHeader.forEach((item) => { //заполняю ячейки заголовка из массива заголовков
        let tableTh = document.createElement('th');
        tableTh.innerText = item;
        tableTh.style = 'border: 2px solid grey; padding: 10px 15px 10px 10px '
        table.append(tableTh);
    })
}
createTable(data);

function addInfo(dataPerson) { //функция заполнения таблицы данными из массива объектов
    dataPerson.forEach((item) => { //пробегаюсь по всем элементам массива с данными
        let elem = document.createElement('tr'); 
        table.append(elem); //для каждого объекта создаю строку таблицы
    
        Object.keys(item).forEach ((itemTableCell) => { //бегу по ключам текущего объекта
            let tdElem = document.createElement('td'); //создаю ячейку
            tdElem.innerText = item[itemTableCell]; //заполняю ячейку значениями соответствующего ключа
            tdElem.style = 'border: 2px dotted grey; padding: 10px 15px 10px 10px ';
            elem.append(tdElem); //вношу ячейку
        })
    
        if (item.age>18) {
            elem.style = "color: green"
        } else {
            elem.style = "color: red"
        }
        
    })
}
addInfo(data)

 function readForm(){
    if  (firstName.value!="" || lastName.value!="" || age.value!="") {
            let newPersonInfo = [{firstName: firstName.value, lastName: lastName.value, age: Number(age.value)}];
            addInfo (newPersonInfo);
            // alert(`
            //     Имя: ${firstName.value}
            //     Фамилия: ${lastName.value}
            //     Возраст: ${age.value}`);
     
    }  else {
            alert(`
                    Поле: ${firstName.name} не заполнено
                    Поле: ${lastName.name} не заполнено
                    Поле: ${age.name} не заполнено`);
    }
    
}










