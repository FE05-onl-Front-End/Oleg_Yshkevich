const colorArray = ['black','red', 'green', 'blue', 
'orange',  'yellow', 'crimson', 'darkblue'];
let colorBlock = document.getElementById('color-selection-block');
let selectFigure = document.getElementById('select-figure');
let canvasFigure = null;
let canvasColor = null;

const changeColor = (event)  =>{
    canvasColor = event.target.style.backgroundColor;
    canvasFigure.style.backgroundColor = canvasColor;
}

function addNewColor() {
    for (let i = 0; i < colorArray.length; i++) {
        let newColor = document.createElement('div');
        newColor.style.backgroundColor = colorArray[i];
        newColor.style.border = '3px solid rgb(255, 255, 255)';
        newColor.style.width = '90%';
        newColor.style.height = '90%';
        newColor.addEventListener('click', changeColor);    
        colorBlock.appendChild(newColor);
    }
}
addNewColor();


function showFigure() {
    document.getElementById('circle').style.display = 'none';
    document.getElementById('sqr').style.display = 'none';
    document.getElementById('rectangle').style.display = 'none';
    canvasFigure = document.getElementById(selectFigure.value);
    if (canvasFigure != null) { //без этой проверки падает ошибка
        canvasFigure.style.display = 'flex';
    }
    canvasFigure.style.backgroundColor = canvasColor;
}

function resetColor(){
    let canvasArr = document.querySelectorAll('.figure');
    canvasArr.forEach(item =>{
        item.style.backgroundColor = null;
    })
}

