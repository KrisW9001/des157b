(function(){
    "use strict";
    console.log('reading js');

    const button = document.querySelector('button');
    let piece = document.getElementById('piece');
    let para1 = document.getElementById('para1');
    let para2 = document.getElementById('para2');
    let title = document.getElementById('piecename');
    let main = document.getElementsByTagName('main');
    let body = document.getElementsByTagName('body');
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

    //functions to update the infobox
    function birdinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML='Birds and Fields';
    }

    //functions to change the current page
    function goback(event){
        document.getElementsByTagName('main')[0].setAttribute('class', 'visible');
        console.log('main will now be visible');
        document.getElementsByTagName('section')[0].className = 'hidden';
    }

    function birdpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Birds and Fields';
        document.getElementById('para1').innerHTML='This panel represents the cultural origins of Davis, and by extension the strong presence the university holds in agriculture. Protecting and preserving the natural land has always been a priority for Davis, ever since the University of California implemented the existing university into its system in 1962.';
        document.getElementById('para2').innerHTML=`The migratory birds shown include the Swainson's Hawk, commonly seen in the flyway. They are also a symbol for peace, taken from a poem by Herbert Bauer. This was taken from a poem by the late Herbert Bauer, encouraging people to "Fly high as [our] latin rhyme, Avis'. It represents the vision and stewardship of the community from establishing habitats for them.`;
        // document.getElementById('piece')
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    
})()