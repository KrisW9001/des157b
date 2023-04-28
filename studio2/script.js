
    'use strict';
    console.log("reading js");

    let globalData;
    // const bubble = document.querySelector('.bubble');
    let bubblestatus = document.getElementsByClassName('bubble');
    const button = document.querySelector('button');

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
                html += `<p id="${data[eachPoint].from}">`;
                html += `${data[eachPoint].name}`;
                html += `<br>`;
                html += `(${data[eachPoint].listens})`;
                html += '</p>';
        });
        return html;
    }

    getData();

    

