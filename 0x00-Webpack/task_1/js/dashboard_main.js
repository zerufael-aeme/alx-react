import $ from 'jquery'
import { debounce } from 'lodash';

$(document).ready(function() {
    const paragraph1 = $('<p>').text('ALX Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const button = $('<button>').text('Click here to get started');
    const paragraph3 = $('<p id="count"></p>').text('');
    const paragraph4 = $('<p>').text('Copyright - ALX');

    let count = 0
    function updateCounter() {
        count++;
        paragraph3.text(`${count} clicks on the button`)
    };

     const debouncedUpdate = debounce(updateCounter, 300);

    button.on('click', debouncedUpdate);

    $('body').append(paragraph1, paragraph2, button, paragraph3, paragraph4);
});