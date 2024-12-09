$(document).ready(function() {
  $("#showcase").Cloud9Carousel( {
    buttonLeft: $("#buttons > .left"),
    buttonRight: $("#buttons > .right"),
    autoPlay: 0,
    bringToFront: true
  } );
});

 console.log(document.getElementsByClassName('frontItemClass')[0]);

let size = document.getElementById("size");
let planetName = document.getElementById("item-title");
let distance = document.getElementById("distance");

function showPlanet(){
    let planet = $(".frontItemClass").attr("alt");
    switch(planet){
        case "MERCURY": console.log("mercury info");
            updateInfo(0);
        break;
        case "VENUS": console.log("venus info");
            updateInfo(1);
            break;
        case "EARTH": console.log("earth info");
            updateInfo(2);
        break;
        case "MARS": console.log("mars info");
            updateInfo(3);
        break;
        case "JUPITER": console.log("jupiter info");
            updateInfo(4);
        break;
        case "SATURN": console.log("saturn info");
            updateInfo(5);
        break;
        case "URANUS": console.log("uranus info");
            updateInfo(6);
        break;
        case "NEPTUNE": console.log("neptune info");
            updateInfo(7);
        break;
        case "PLUTO": console.log("pluto info");
            updateInfo(8);
        break;
        default: console.log("didn't work");
    }
}

let planetArray = [
  {"name":"MERCURY", 
      "distance":"36 million miles",
      "size":"3,032 mile diameter"},
  {"name":"VENUS", 
      "distance":"26 million miles",
      "size":"7,521 mile diameter"},
  {"name":"EARTH", 
      "distance":"93 million miles",
      "size":"7,926 mile diameter"},
  {"name":"MARS", 
      "distance":"49 million miles",
      "size":"4,221 mile diameter"},
  {"name":"JUPITER", 
      "distance":"483.7 million miles",
      "size":"142,984 mile diameter"},
  {"name":"SATURN", 
      "distance":"889.8 million miles",
      "size":"74,898 mile diameter"},
  {"name":"URANUS", 
      "distance":"1.8 billion miles",
      "size":"31,763 mile diameter"},
  {"name":"NEPTUNE", 
      "distance":"2.8 billion miles",
      "size":"30,775 mile diameter"},
  {"name":"PLUTO", 
      "distance":"3.67 billion miles",
      "size":"1,477 mile diameter"}

]

function updateInfo(place){
  planetName.innerHTML = planetArray[place].name;
  distance.innerHTML = planetArray[place].distance;
  size.innerHTML = planetArray[place].size;
}

function spin(index){
  $("#showcase").data("carousel").goTo( index );
}