// GET YOUTUBE DATA
window.onload = function(){
  var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
  function loadVideo(iframe) {
    $.getJSON(reqURL + iframe.getAttribute('cid'),
      function(data) {
        var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
        console.log(videoNumber);
        var link = data.items[videoNumber].link;
        id = link.substr(link.indexOf("=") + 1);
        iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=0");
      }
    );
  }
  var iframes = document.getElementsByClassName('latestVideoEmbed');
  for (var i = 0, len = iframes.length; i < len; i++) {
    loadVideo(iframes[i]);
  }
// SHOW DALASREVIEW CHANNEL
var youtube1 = document.getElementById('DalasReview');
var showDalasReview = document.getElementById('showDalasReview');
showDalasReview.addEventListener("click", function() {
youtube1.classList.toggle("show");
youtube1.classList.toggle("hide");
});
// END DALASREVIEW CHANNEL
}
// END OF YOUTUBE data
