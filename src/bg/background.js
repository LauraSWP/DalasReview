// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

chrome.storage.onChanged.addListener(function(changes, namespace) {
     console.log("Nuevo Video!");
     new Acho().growl();
     chrome.notifications.create("", {
        type:    "image",
        iconUrl: "/../icons/+1.png",
        imageUrl: "/../icons/+1.png",
        title:   "Nuevo Video de Dalas Review",
        message: "Dalas ha publicado un nuevo video",
        contextMessage: "Ya era hora...",
    }, function(id) {
        myNotificationID = id;
    });
  })
chrome.alarms.create("5min", {
  delayInMinutes: 10,
  periodInMinutes: 10
});
chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === "5min") {
    var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
    var reqURL2 = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
    function loadDalasReview(iframe) {
      $.getJSON(reqURL + iframe.getAttribute('cid'),
        function(data) {
          var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
          var link = data.items[videoNumber].link;
          var image = data.items[videoNumber].thumbnail;
          id = link.substr(link.indexOf("=") + 1);
          console.log(data);
          iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=0");
          loadSRC();
        });
    }
    var iframes = document.getElementsByClassName('latestVideoEmbed');
    for (var i = 0, len = iframes.length; i < len; i++) {
      loadDalasReview(iframes[i]);
    }
    function loadSRC() {
              var videoID = document.getElementById("DalasReview").src;
              chrome.storage.sync.set({'videoSRC': videoID}, function() {
    console.log("Ultimo Video Guardado");
  });
    }
    function loadDalasSinFiltros(iframe) {
      $.getJSON(reqURL2 + iframe.getAttribute('cid'),
        function(data) {
          var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
          var link = data.items[videoNumber].link;
          id = link.substr(link.indexOf("=") + 1);
          console.log(id);
          iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=0");
          loadSRC2();
        });
    }
    var iframes = document.getElementsByClassName('latestVideoEmbed2');
    for (var i = 0, len = iframes.length; i < len; i++) {
      loadDalasReview(iframes[i]);
    }
    function loadSRC2() {
              var videoID2 = document.getElementById("DalasSinFiltros").src;
              chrome.storage.sync.set({'videoSRC2': videoID2}, function() {
    console.log("Ultimo Video Guardado");
  });
    }
  }
});
