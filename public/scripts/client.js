/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      }
    ]
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
    const timeAgo = tweetObject.created_at;
    const markup = `
    <div class="tweets">
      <a class = "tweets">
        <header class="tweets">
          <div class="user"><img class="tweets avatar" src= ${avatar}>${name}</div>
          <p class="handle">${handle}</p>
        </header>
        <p class="tweets">${text}</p>
        <footer class="tweets">
          <p>${timeAgo}</p><div><img class="icon" src="images/flag.svg"><img class="icon" src="images/repeat.svg"><img class="icon" src="images/heart.svg"></div>
        </footer>
      </a>
    </div>`;
    return markup;
  }
  // Test / driver code (temporary). Eventually will get this from the server.
  
  renderTweets(data);
})
