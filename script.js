
let author = document.getElementById("author");
let tweet = document.getElementById("tweet");

const tweets = [];

document.getElementById("posted").addEventListener("click", function(event){
    event.preventDefault();

    tweets.push({author: author.value, tweet: tweet.value});
    console.log(tweets);

    createTweet();

  });

  function createTweet (){
    if(author.value != "" && tweet.value != ""){
    const newTweet = `
    <div id="post" class="post">
          <div class="post__avatar">
            <img src="./images/profile.png" alt=""/>
          </div>
          <div class="post__body">
            <div class="post__header">
              <div class="post__headerText">
                <h3>
                    `+ author.value +`
                  <span class="post__headerSpecial">
                  <span class="material-icons post__badge"> verified </span>@somanathg</span>
                </h3>
              </div>
              <div class="post__headerDescription">
                <p>`+ tweet.value +`</p>
              </div>
            </div>
            <div class="post__footer">
               <span><i id="lik" class="fa fa-retweet" aria-hidden="true"></i></span>
              <span class="likeBtn"><i onclick="getElementById('liked2').style.color='red'" id="liked2" class="fa fa-heart" aria-hidden="true"></i></span>
            </div>
          </div>
        </div>
    `;

    document.getElementById("newsfeed").insertAdjacentHTML("afterbegin", newTweet);

    author.value = "";
    tweet.value = "";
  }
  }


const likes = document.getElementsByClassName("likeBtn");


let retweetButton = document.getElementById("lik");
let newsfeed = document.getElementById("newsfeed");
let retweet = document.getElementById("post");

retweetButton.addEventListener("click", function() {
  let newTweet = retweet.cloneNode(true);
  newsfeed.insertBefore(newTweet, newsfeed.firstChild);
});