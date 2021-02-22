let tabs = document.getElementById('tabs-header');
let content = document.querySelectorAll('.tab');
let closeArray = document.querySelectorAll('.close');
// console.log(closeElem);

function changeContent(choise) { //функция переключения по табам и мсены контента
    for (let i = 0; i < tabs.children.length; i++) { 
        tabs.children[i].classList.remove('active');
    }
    choise.classList.add('active'); //добавляю 'active' для выбранного таба

    content.forEach(item => { //оставляю 'active' только у выбранного блока
        if (choise.dataset.number != item.dataset.number) {
            item.classList.remove('active');
        } else {
            item.classList.add('active')
        }
    })
}

tabs.addEventListener('click', function(event){ //чекаю нажатие в хедере и вызываю функцию изменения
    if(event.target.id != "tabs-header") { //проверка на случай, если попадаю между табами
        changeContent(event.target);
    }
})


closeArray.forEach(item =>{  //функция удаления табов
    item.addEventListener('click', function(event){ //добавляю события по клику всем крестикам
        event.stopPropagation(); //предотвращаю сквозное нажате
        let deleteElem = event.target.parentNode; 
        let newSwitchElem = deleteElem.nextElementSibling || deleteElem.previousElementSibling;

        if (deleteElem.classList.value.includes('active')) {
            deleteElem.remove();
            changeContent(newSwitchElem); //вызываю функцию переключения таба
        } else {
            deleteElem.remove();
        }

        if (tabs.children.length == 1) {
            closeArray.forEach(function(item) {
                item.style.display = 'none'
            })
        }
        
    })
})


