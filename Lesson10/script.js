let circle = document.getElementById('circle');

document.addEventListener('mousemove', function(event){
    circle.style.top = `${event.clientY - 12.5}px`;
    circle.style.left = `${event.clientX - 12.5}px`
});