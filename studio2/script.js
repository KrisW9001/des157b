
    'use strict';
    console.log("reading js");

    let globalData;

    async function getData(){
        const myMusic = await fetch ('data/music.json');
        const data = await myMusic.json();
        console.log(data);
        globalData = data;
        document.querySelector('#music').innerHTML = outputHTML1(data);
    }

    function outputHTML1(data){
        let html = '<option>---</option>';
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach(function(eachPoint){
            html += `<p class="bubble" id="${data[eachPoint].from}">`;
            html += `${data[eachPoint].name}`;
            html += '</p>';
        });
        return html;
    }

    getData();

