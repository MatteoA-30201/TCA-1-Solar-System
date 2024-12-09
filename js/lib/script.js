console.log(document.getElementsByClassName('frontItemClass')[0]);

let size = document.getElementById("size");
let planetName = document.getElementById("item-title");
let distance = document.getElementById("distance");
let fact = document.getElementById("fact");

function showPlanet(){
    let planet = $(".frontItemClass").attr("alt");
    switch(planet){
        case "Mercury": console.log("mercury info");
            updateInfo(0);
        break;
        case "Venus": console.log("venus info");
            updateInfo(1);
            break;
        case "Earth": console.log("earth info");
            updateInfo(2);
        break;
        case "Mars": console.log("mars info");
            updateInfo(3);
        break;
        case "Jupiter": console.log("jupiter info");
            updateInfo(4);
        break;
        case "Saturn": console.log("saturn info");
            updateInfo(5);
        break;
        case "Uranus": console.log("uranus info");
            updateInfo(6);
        break;
        case "Neptune": console.log("neptune info");
            updateInfo(7);
        break;
        case "Pluto": console.log("pluto info");
            updateInfo(8);
        break;
        default: console.log("didn't work");
    }
}

let planetArray = [
  {"name":"mercury", 
      "distance":"36 million miles",
      "size":"3,032 mile diameter",
      "fact":"Mercury is the smallest planet in our solar system, and the nearest to the Sun"},
  {"name":"venus", 
      "distance":"26 million miles",
      "size":"7,521 mile diameter",
      "fact":"Venus is the second planet from the Sun, and Earth's closest planetary neighbor."},
  {"name":"earth", 
      "distance":"93 million miles",
      "size":"7,926 mile diameter",
      "fact":"Earth – our home planet – is the third planet from the Sun, and the fifth largest planet."},
  {"name":"mars", 
      "distance":"49 million miles",
      "size":"4,221 mile diameter",
      "fact":"Mars – the fourth planet from the Sun – is a dusty, cold, desert world with a very thin atmosphere."},
  {"name":"jupiter", 
      "distance":"483.7 million miles",
      "size":"142,984 mile diameter",
      "fact":"Jupiter is the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside."},
  {"name":"saturn", 
      "distance":"889.8 million miles",
      "size":"74,898 mile diameter",
      "fact":"Saturn is the sixth planet from the Sun, the second-largest planet in our solar system."},
  {"name":"uranus", 
      "distance":"1.8 billion miles",
      "size":"31,763 mile diameter",
      "fact":"The seventh planet from the Sun, Uranus has the third largest diameter of planets in our solar system."},
  {"name":"neptune", 
      "distance":"2.8 billion miles",
      "size":"30,775 mile diameter",
      "fact":"Neptune is the eighth and most distant planet in our solar system."},
  {"name":"pluto", 
      "distance":"3.67 billion miles",
      "size":"1,477 mile diameter",
      "fact":"Pluto was long considered our solar system's ninth planet. But it was reclassified as a dwarf planet in 2006 by the International Astronomical Union."}

]

function updateInfo(place){
  planetName.innerHTML = planetArray[place].name;
  distance.innerHTML = planetArray[place].distance;
  size.innerHTML = planetArray[place].size;
  fact.innerHTML = planetArray[place].fact;
}

function spin(index){
  $("#showcase").data("carousel").goTo( index );
}