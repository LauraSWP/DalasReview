// GET YOUTUBE DATA


window.onload = function(){
      var saludo = [
            "¡Hola 🍞 🐝 ! ¿Como te va el día?"
          , "Hoy te ves genial 🍞 🐝."
          , "¿Ya has comido? ¡Hay que alimentarse!"
          , "¿Ya estás en Discord, 🍞 🐝 ?"
          , "Si tienes un mal dia, 🍞 🐝 , recuerda que Dalasito te quiere."
          , "¡Mantén la mente ocupada, 🍞 🐝 !"
          , "Oye, 🍞 🐝 , te ves mamadísimamente genial hoy."
          , "¿Ya has visto mi último video, 🍞 🐝 ?"
      ];
      var saludo_id = Math.floor(Math.random() * saludo.length);
      document.getElementById('saludo').innerHTML = saludo[saludo_id];
function videoIframe() {
   var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
  function loadVideo(iframe) {
    $.getJSON(reqURL + iframe.getAttribute('cid'),
      function(data) {
        var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
        var link = data.items[videoNumber].link;
        id = link.substr(link.indexOf("=") + 1);
        console.log(id);
        iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=0&modestbranding=1&showinfo=0");
      });
  }
  var iframes = document.getElementsByClassName('latestVideoEmbed');
  for (var i = 0, len = iframes.length; i < len; i++) {
    loadVideo(iframes[i]);
  }
}
// PANEL Principal
var panel = document.getElementById('panel');
var saludo = document.getElementById('saludo');
var home = document.getElementById('home');
// HOME
home.addEventListener("click", function() {
panel.classList.add("show");
panel.classList.remove("hide");
saludo.classList.add("show");
saludo.classList.remove("hide");
youtube2.classList.remove("show");
youtube2.classList.add("hide");
youtube1.classList.remove("show");
youtube1.classList.add("hide");
tweecool.classList.remove("show");
tweecool.classList.add("hide");
close3.classList.add("show");
close3.classList.remove("hide");
});
// HOME END
// START TWITTER FEED
var twitter = document.getElementById('twitter');
var close3 = document.getElementById('closeButton3');
var tweecool = document.getElementById('tweecool');
twitter.addEventListener("click", function() {
tweecool.classList.add("show");
tweecool.classList.remove("hide");
youtube2.classList.remove("show");
youtube2.classList.add("hide");
youtube1.classList.remove("show");
youtube1.classList.add("hide");
panel.classList.remove("show");
panel.classList.add("hide");
saludo.classList.remove("show");
saludo.classList.add("hide");
close3.classList.add("show");
close3.classList.remove("hide");
});
// END TWITTER FEED

// SHOW DALASREVIEW CHANNEL
var youtube1 = document.getElementById('DalasReview');
var close1 = document.getElementById('closeButton1');
var showDalasReview = document.getElementById('showDalasReview');
showDalasReview.addEventListener("click", function() {
  window.videoIframe = function() {}    // no-op function
videoIframe();
acho();
youtube1.classList.remove("hide");
youtube1.classList.add("show");
youtube2.classList.remove("show");
youtube2.classList.add("hide");
panel.classList.remove("show");
panel.classList.add("hide");
saludo.classList.remove("show");
saludo.classList.add("hide");
close1.classList.add("show");
close1.classList.remove("hide");
tweecool.classList.remove("show");
tweecool.classList.add("hide");
    console.clear()
});
// END DALASREVIEW CHANNEL

// SHOW DALAS SIN FILTROS CHANNEL
var youtube2 = document.getElementById('DalasSinFiltros');
var close2 = document.getElementById('closeButton2');
var showDalasSinFiltros = document.getElementById('showDalasSinFiltros');
showDalasSinFiltros.addEventListener("click", function() {
  window.videoIframe = function() {}    // no-op function
videoIframe();
acho();
youtube2.classList.add("show");
youtube2.classList.remove("hide");
panel.classList.remove("show");
panel.classList.add("hide");
saludo.classList.remove("show");
saludo.classList.add("hide");
youtube1.classList.remove("show");
youtube1.classList.add("hide");
close2.classList.add("show");
close2.classList.remove("hide");
tweecool.classList.remove("show");
tweecool.classList.add("hide");
    console.clear();
});
// END DALASREVIEW CHANNEL

// START CLOSE BUTTONS
close2.addEventListener("click", function() {
  delete window.videoIframe;
  console.clear();
  panel.classList.toggle("show");
  panel.classList.toggle("hide");
  saludo.classList.toggle("show");
  saludo.classList.toggle("hide");
youtube2.classList.remove("show");
youtube2.classList.add("hide");
});
close1.addEventListener("click", function() {
  delete window.videoIframe;
  console.clear();
  panel.classList.toggle("show");
  panel.classList.toggle("hide");
  saludo.classList.toggle("show");
  saludo.classList.toggle("hide");
youtube1.classList.remove("show");
youtube1.classList.add("hide");
});
close3.addEventListener("click", function() {
  delete window.videoIframe;
  console.clear();
  panel.classList.toggle("show");
  panel.classList.toggle("hide");
  saludo.classList.toggle("show");
  saludo.classList.toggle("hide");
tweecool.classList.remove("show");
tweecool.classList.add("hide");
});
// END CLOSE BUTTONS
function acho() {
    const acho = new Acho();
    acho.quiet();
}

}
$( function() {
  $( document ).tooltip({
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
    }
  });
} );
// END OF YOUTUBE data
