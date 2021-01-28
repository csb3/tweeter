$(document).ready(function() {
  $("textarea#tweet-text").on("input", function() {
    let numberOfChars = $(this).val().length;
    $(this).siblings().children(".counter").html(140 - numberOfChars)
    if ($(this).siblings().children(".counter").html() < 0) {
      $(this).siblings().children(".counter").css("color", "red");
    } else {
      $(this).siblings().children(".counter").css("color", "#545149");
    }
  })
});
