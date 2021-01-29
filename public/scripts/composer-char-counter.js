/* eslint-env browser */
/* eslint-env jquery */

//Counts down from 140 characters based on length of input in tweet-text field
$(document).ready(function() {
  $("textarea#tweet-text").on("input", function() {
    let numberOfChars = $(this).val().length;
    $(this).siblings().children(".counter").html(140 - numberOfChars);
    //If the number of characters remaining is a negative number, the counter turns red
    if ($(this).siblings().children(".counter").html() < 0) {
      $(this).siblings().children(".counter").css("color", "red");
    } else {
      $(this).siblings().children(".counter").css("color", "#545149");
    }
  });
});
