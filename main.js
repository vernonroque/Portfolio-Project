/*let d = Date();
alert('Today\'s date is ' + d);*/
/*
changes color of background
let background = document.querySelector('body');
background.style.backgroundColor='rgb(168, 50, 123)';*/

//onclick function
let element = document.getElementById("project_1");
let element2 = document.getElementById("project_2");

let image = document.getElementById('project_1_image');
let image2 = document.getElementById('project_2_image');

let button = document.getElementById('close_button');
let button2 = document.getElementById('close_button2');

let description = document.getElementById('project_description');
let description2 = document.getElementById('project_description2');

function showMessage () {
    image.style.display = 'block';
    description.style.display = 'block';
    button.style.display = 'block';
}
function closeMessage () {
    image.style.display = 'none';
    description.style.display = 'none';
    button.style.display = 'none';
}

function showMessage2 () {
    image2.style.display = 'block';
    description2.style.display = 'block';
    button2.style.display = 'block';
}
function closeMessage2 () {
    image2.style.display = 'none';
    description2.style.display = 'none';
    button2.style.display = 'none';
}
element.addEventListener('click',showMessage);
element2.addEventListener('click',showMessage2);

button.addEventListener('click', closeMessage);
button2.addEventListener('click', closeMessage2);


