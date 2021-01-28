/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function(data){
      renderTweets(data);
    });
    };

  loadTweets();

  const renderTweets = function(tweets) {
    for (const entry of tweets) {
      console.log(entry);
      const $tweet = createTweetElement(entry)
      $('section.tweets').append($tweet); 
    }
  }
  const createTweetElement = function(tweetObject) {
    const avatar = tweetObject.user.avatars;
    const text = tweetObject.content.text;
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
    <p><time class="timeago" datetime="${date}">${date}</time></p><div><img class="icon" src="images/flag.svg"><img class="icon" src="images/repeat.svg"><img class="icon" src="images/heart.svg"></div>
    </footer>
    </a>
    </div>`;
    
    $("time.timeago").timeago();
    return markup;
  }
  // Test / driver code (temporary). Eventually will get this from the server.

  $('#tweet-form').on("submit", function(event) {
    
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: '#tweet-form'.serialize(),
      }).then(() => {
        console.log(data);
      })
    });
});
