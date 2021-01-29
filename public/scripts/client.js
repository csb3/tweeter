/* eslint-disable no-undef */
/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


$(document).ready(function() {
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(data) {
        renderTweets(data);
        $("time.timeago").timeago();
      });
  };

  loadTweets();

  const renderTweets = function(tweets) {
    for (const entry of tweets) {
      const $tweet = createTweetElement(entry);
      $('section.tweets').append($tweet);
    }
  };
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  const createTweetElement = function(tweetObject) {
    const avatar = tweetObject.user.avatars;
    const text = escape(tweetObject.content.text);
    const handle = tweetObject.user.handle;
    const name = tweetObject.user.name;
    const date = new Date(tweetObject.created_at).toISOString();
    const markup = `
   <div class="tweets">
    <a class = "tweets">
      <header class="tweets">
        <div class="user"><img class="tweets avatar" src= ${avatar}>${name}</div>
        <p class="handle">${handle}</p>
      </header>
      <p class="tweets">${text}</p>
      <footer class="tweets">
        <p><time class="timeago" datetime="${date}">${date}</time></p>
        <div><img class="icon" src="images/flag.svg"><img class="icon" src="images/repeat.svg"><img class="icon" src="images/heart.svg"></div>
      </footer>
    </a>
   </div>`;
    return markup;
  };
  
  $('#tweet-form').on("submit", function(event) {
    event.preventDefault();
    console.log($('#tweet-text').val().length);
    if ($('#tweet-text').val().length === 0 || $('#tweet-text').val() === null) {
      $('a.error').html("! Tweet cannot be blank");
      $("a.error").slideDown("fast", function() {
        // Animation complete.
      });
    } else if ($('#tweet-text').val().length > 140) {
      $('a.error').html("! Tweet cannot exceed 140 characters");
      $("a.error").slideDown("fast", function() {
        // Animation complete.
      });
    } else {
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $('#tweet-text').serialize(),
      }).then(() => {
        $('section.tweets').empty();
        loadTweets();
        $('#tweet-text').val('');
        $("a.error").slideUp("fast", function() {
          // Animation complete.
        });
        $('a.error').html("");
        $(".counter").html(140);
      });
    }
  });
});