import $ from "jquery";

$(document).ready(function () {
  const paragraph1 = $('<p>').html("ALX Dashboard ,</br>");
  const paragraph2 = $('<p>').html("Dashboard data for the students</br>");
  const paragraph3 = $('<p>').html("Copyright - ALX");

  $('body').append(paragraph1, paragraph2, paragraph3);
});

