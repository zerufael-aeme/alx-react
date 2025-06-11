import $ from 'jquery'
import { debounce } from 'lodash';
import '../css/main.css'
import logoUrl from '../assets/holberton-logo.jpg';


$(document).ready(function() {
    const logo = $('<div id="logo" style="height: 200px; width: 200px; background-image: url(../assets/holberton-logo.jpg);"></div>');
    const paragraph1 = $('<p>').text('ALX Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const button = $('<button>').text('Click here to get started');
    const paragraph3 = $('<p id="count"></p>').text('');
    const paragraph4 = $('<p>').text('Copyright - ALX');

    const box = $('<div></div>'); // Create the div
    box.append(button, paragraph3); // Use the box variable directly

    let count = 0
    function updateCounter() {
        count++;
        paragraph3.text(`${count} clicks on the button`)
    };

     const debouncedUpdate = debounce(updateCounter, 300);

    button.on('click', debouncedUpdate);

    $('body').append(logo, paragraph1, paragraph2, box, paragraph4);
});