(function(){
    "use strict";
    console.log('reading js');

    const button = document.querySelector('button');
    let piece = document.getElementById('piece');
    let para1 = document.getElementById('para1');
    let para2 = document.getElementById('para2');
    let title = document.getElementById('piecename');
    let main = document.getElementsByTagName('main');
    let section = document.getElementsByTagName('section');
    let infobox = document.getElementById('infobox');

    //defining values of each image map element to make later code shorter

    const birds = document.getElementById('birds');
    const birds2 = document.getElementById('birds2');
    const market = document.getElementById('market');
    const huynh = document.getElementById('hyunh');
    const selma = document.getElementById('selma');
    const farm = document.getElementById('farm');
    const townname = document.getElementById('townname');
    const patwin = document.getElementById('patwin');
    const patwin2 = document.getElementById('patwin2');
    const map = document.getElementById('map');
    const business = document.getElementById('map');
    const university = document.getElementById('university');
    const civengage = document.getElementById('civicengagement');
    const children = document.getElementById('children');
    const agriculture = document.getElementById('agriculture');
    const finalring = document.getElementById('finalring');
    const finalring2 = document.getElementById('finalring2');

    birds.addEventListener('click', birdpage);
        birds.addEventListener('mouseover', birdinfo);
    birds2.addEventListener('click', birdpage);
        birds2.addEventListener('mouseover', birdinfo);
    button.addEventListener('click', goback);

    function birdinfo(event){
        event.preventDefault();
        infobox.setAttribute('color', 'white');
    }

    //functions to change the current page
    function goback(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'visible');
        console.log('main will now be visible');
        document.getElementsByTagName('section')[0].className = 'hidden';
    }

    function birdpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementsByTagName('section')[0].className = 'visible';
    }


})()