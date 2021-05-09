/*let d = Date();
alert('Today\'s date is ' + d);*/
/*
changes color of background
let background = document.querySelector('body');
background.style.backgroundColor='rgb(168, 50, 123)';*/

//onclick function
let element = document.getElementById("project_1");
let element2 = document.getElementById("project_2");
let element3 = document.getElementById("project_3");
let element4 = document.getElementById("project_4");

let image = document.getElementById('project_1_image');
let image2 = document.getElementById('project_2_image');
let image3 = document.getElementById('project_3_image');
let image4 = document.getElementById('project_4_image');

let button = document.getElementById('close_button');
let button2 = document.getElementById('close_button2');
let button3 = document.getElementById('close_button3');
let button4 = document.getElementById('close_button4');

let description = document.getElementById('project_description');
let description2 = document.getElementById('project_description2');
let description3 = document.getElementById('project_description3');
let description4 = document.getElementById('project_description4');

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

function showMessage3 () {
    image3.style.display = 'block';
    description3.style.display = 'block';
    button3.style.display = 'block';
}
function closeMessage3 () {
    image3.style.display = 'none';
    description3.style.display = 'none';
    button3.style.display = 'none';
}

function showMessage4 () {
    image4.style.display = 'block';
    description4.style.display = 'block';
    button4.style.display = 'block';
}
function closeMessage4 () {
    image4.style.display = 'none';
    description4.style.display = 'none';
    button4.style.display = 'none';
}


element.addEventListener('click',showMessage);
element2.addEventListener('click',showMessage2);
element3.addEventListener('click',showMessage3);
element4.addEventListener('click',showMessage4);

button.addEventListener('click', closeMessage);
button2.addEventListener('click', closeMessage2);
button3.addEventListener('click', closeMessage3);
button4.addEventListener('click', closeMessage4);


