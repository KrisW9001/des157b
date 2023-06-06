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
    const huynh = document.getElementById('huynh');
    const selma = document.getElementById('selma');
    const farm = document.getElementById('farm');
    const townname = document.getElementById('townname');
    const patwin = document.getElementById('patwin');
    const patwin2 = document.getElementById('patwin2');
    const map = document.getElementById('map');
    const business = document.getElementById('business');
    const university = document.getElementById('university');
    const civic = document.getElementById('civicengagement');
    const children = document.getElementById('children');
    const agriculture = document.getElementById('agriculture');
    const finalring = document.getElementById('finalring');
    const finalring2 = document.getElementById('finalring2');


    birds.addEventListener('click', birdpage);
        birds.addEventListener('mouseover', birdinfo);
    birds2.addEventListener('click', birdpage);
        birds2.addEventListener('mouseover', birdinfo);
    civic.addEventListener('click', civicpage);
        civic.addEventListener('mouseover', civicinfo);
    huynh.addEventListener('click', huynhpage);
        huynh.addEventListener('mouseover', huynhinfo);
    children.addEventListener('click', childrenpage);
        children.addEventListener('mouseover', childreninfo);
    business.addEventListener('click', businesspage);
        business.addEventListener('mouseover', businessinfo);
    agriculture.addEventListener('click', agriculturepage);
        agriculture.addEventListener('mouseover', agricultureinfo);
    market.addEventListener('click', marketpage);
        market.addEventListener('mouseover', marketinfo);
    selma.addEventListener('click', selmapage);
        selma.addEventListener('mouseover', selmainfo);
    button.addEventListener('click', goback);

    //functions to update the infobox
    function birdinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML='Birds and Fields';
    }

    function civicinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML='Civic Engagement';
    }

    function huynhinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML='Thong Hy Huynh & ERA';
    }

    function childreninfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML='Children';
    }

    function businessinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML='Business & Commerce';
    }

    function agricultureinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML='Agriculture & Wintun';
    }

    function marketinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML="Farmer's Market & Biking";
    }

    function selmainfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML="Community & Selma March";
    }

    //functions to change the current page
    function goback(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'visible');
        console.log('main will now be visible');
        document.getElementsByTagName('section')[0].setAttribute('class', 'hidden');
    }

    function birdpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Birds and Fields';
        document.getElementById('piece').setAttribute('src', 'images/birds.png');
        document.getElementById('para1').innerHTML='This panel represents the cultural origins of Davis, and by extension the strong presence the university holds in agriculture. Protecting and preserving the natural land has always been a priority for Davis, ever since the University of California implemented the existing university into its system in 1962.';
        document.getElementById('para2').innerHTML=`The migratory birds shown include the Swainson's Hawk, commonly seen in the flyway. They are also a symbol for peace, taken from a poem by Herbert Bauer. This was taken from a poem by the late Herbert Bauer, encouraging people to "Fly high as [our] latin rhyme, Avis'. It represents the vision and stewardship of the community from establishing habitats for them.`;
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function civicpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Civic Engagement';
        document.getElementById('piece').setAttribute('src', 'images/civic.png');
        document.getElementById('para1').innerHTML='The images depicted in this panel are meant to represent the larger concept of engagement from the community. It shows the Davis City Hall and city offices, along with badges to represent the police and fire department. The bottom image on the panel shows an election. While themes of community and civic participation are plentiful throughout the events and concepts shown throughout the seal, this is the most clear depiction of the larger aspect of engagement through building the city itself.';
        document.getElementById('para2').innerHTML=`The City of Davis' offical website states that the 8 radiating panels "illustrate our development as a city..through the exploration of themes that tie us back to our beginnings and extend to the present day and into the future". This panel best exemplifies this idea, as the images are not specified to any event or time.`;
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function huynhpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Thong Hy Huynh & ERA';
        document.getElementById('piece').setAttribute('src', 'images/huynh.png');
        document.getElementById('para1').innerHTML=`In the words of Wendy Weitzel of the Davis Enterprise, "not all the portrayals on the seal are celebratory. This panel features Thong Hy Huynh, a high school student who became the victim of a lethal hate crime in 1983. Their death was a tragedy, and the themes represented here are harshly relevant due to the recent murders in 2023. It is important to recognize these events, why they happen, and how a community should come together in a time of tragedy.`;
        document.getElementById('para2').innerHTML='In honor of their life, the Thong Hy Hunh Award was established to encourage and raise awareness for social justice and equal rights. The panel also depicts other awards that have been established for similar purposes of encouraging minidfulness and equality, such as the Environmental Recognition Award for the contributions of a person or group for that cause, and the Golden Heart Award for "exceptional youth" who make significant contributions to the community. The Golden Heart was also established in memory of Andrew Mockus, who suffered a similar tragedy to Huynh.';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function childrenpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Children';
        document.getElementById('piece').setAttribute('src', 'images/children.png');
        document.getElementById('para1').innerHTML='Placeholder Text';
        document.getElementById('para2').innerHTML='Placeholder Text';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function businesspage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Business & Commerce';
        document.getElementById('piece').setAttribute('src', 'images/business.png');
        document.getElementById('para1').innerHTML='Placeholder Text';
        document.getElementById('para2').innerHTML='Placeholder Text';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function agriculturepage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Agriculture & Wintun';
        document.getElementById('piece').setAttribute('src', 'images/agriculture.png');
        document.getElementById('para1').innerHTML='Placeholder Text';
        document.getElementById('para2').innerHTML='Placeholder Text';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function marketpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="Farmer's Market & Biking";
        document.getElementById('piece').setAttribute('src', 'images/market.png');
        document.getElementById('para1').innerHTML='Placeholder Text';
        document.getElementById('para2').innerHTML='Placeholder Text';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function selmapage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="Community & Selma March";
        document.getElementById('piece').setAttribute('src', 'images/selma.png');
        document.getElementById('para1').innerHTML='Placeholder Text';
        document.getElementById('para2').innerHTML='Placeholder Text';
        document.getElementsByTagName('section')[0].className = 'visible';
    }
})()