(function(){
    'use strict';

    const ollie = document.querySelector(".ollie");
    const memuButton = document.querySelector(".memu");
    const sealButton = document.querySelector(".seal");
    const location = document.querySelector(".location");

    let map = L.map('map').setView([38.5449, -121.7495], 14); 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);  
//adds the locations to the interactive map
const memunion = L.circle([38.5425, -121.74958], {
    color: 'blue',
    fillColor:'darkblue',
    fillOpacity: 0.5,
    radius:25
}).addTo(map);

const sealsite = L.circle([38.5431, -121.7407],{
    color: 'blue',
    fillColor:'darkblue',
    fillOpacity: 0.5,
    radius:25
}).addTo(map);

//sets the interactive elements of the map
memunion.bindPopup(`Go to <button id="memu">Memorial Union</button>?`);
sealsite.bindPopup(`Go to <button id="seal">Centennial Seal Site</button>?`);

var popup = L.popup()
    
    
    map.on('click', onMapClick);
    var popup = L.popup();

    memunion.on('click', function(a){
        memunion.color= 'red';
    });


map.on('click', onMapClick);

memuButton.addEventListener('click', function(){
    location.setAttribute('src', 'images/ollie.jpg');
})

sealButton.addEventListener('click', function(){
    document.getElementsByTagName('img').setAttribute('src', 'images/seal.jpg');
})
}());