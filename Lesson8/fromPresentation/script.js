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



form.addEventListener("submit", () => {
    if  (firstName.value!="" || lastName.value!="" || age.value!="") {
            alert(`
                Имя: ${firstName.value}
                Фамилия: ${lastName.value}
                Возраст: ${age.value}`);
    }  else {
        alert(`
                Поле: ${firstName.name} не заполнено
                Поле: ${lastName.name} не заполнено
                Поле: ${age.name} не заполнено`);
    }
})