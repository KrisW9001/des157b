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
    university.addEventListener('click', universitypage);
        university.addEventListener('mouseover', universityinfo);
    farm.addEventListener('click', farmpage);
        farm.addEventListener('mouseover', farminfo);
    townname.addEventListener('click', townnamepage);
        townname.addEventListener('mouseover', townnameinfo);
    patwin.addEventListener('click', patwinpage);
        patwin.addEventListener('mouseover', patwininfo);
    patwin2.addEventListener('click', patwinpage);
        patwin2.addEventListener('mouseover', patwininfo);
    map.addEventListener('click', mappage);
        map.addEventListener('mouseover', mapinfo);
    finalring.addEventListener('click', finalringpage);
        finalring.addEventListener('mouseover', finalringinfo);
    finalring2.addEventListener('click', finalringpage);
        finalring2.addEventListener('mouseover', finalringinfo);
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
        document.getElementById('infobox').innerHTML='Yolo County';
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

    function universityinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML="UC Davis";
    }

    function farminfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML="University Farm & Davisville";
    }

    function townnameinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML="Davis Enterprise & Town Name";
    }

    function patwininfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML="The Patwin Tribe";
    }

    function mapinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML="Crossroads";
    }

    function finalringinfo(event){
        event.preventDefault();
        infobox.style.color='rgb(208, 211, 223)';
        document.getElementById('infobox').innerHTML="Flora and Fauna";
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
        document.getElementById('para1').innerHTML="Davis is highly regarded as a great place for raising kids, and this is reflected in this panel. Represented here are the sports, arts, and enrichment opporunities for children.";
        document.getElementById('para2').innerHTML='However, this panel also holds a second meaning. One of the children is shown to be watching the others without interacting with them. This represents the unfortunate reality that many have faced and continue to struggle with today; from being forcefully removed from their families such as Patwin tribe children forced to another city, Japanese families put into concentration camps, and children of migrant farmworkers who were never able to complete their education. The harsh reality has just as much significance to the history of Davis as the optimism shown in the rest of the panel.';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function businesspage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Business & Commerce';
        document.getElementById('piece').setAttribute('src', 'images/business.png');
        document.getElementById('para1').innerHTML="This panel depicts a large amount of symbols and groups related to commerce and business to represent innovation and vision. These include the Hunt-Boyer Mansion, almond trees representing the Davisville Almond Growers Association, the Hunt Wesson tomato processing plant, and the Twin Pines logo to represent the large numeber of co-op businesses and services in Davis.";
        document.getElementById('para2').innerHTML='The <a href="https://www.davischamber.com/">Davis Chamber of Commerce</a> is also represented here, representing a dedication to the community for education and business. This panel overall represents a similar dediation to community from multiple angles, all with the goal of improving life for everyone.';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function agriculturepage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML='Yolo County';
        document.getElementById('piece').setAttribute('src', 'images/agriculture.png');
        document.getElementById('para1').innerHTML="Much of Davis' identity is defined by the booming agricutlural town it used to be. Farming remains a major part of Davis' legacy and continued presence, but Davis no longer nearly as much of an agricultural town. This is where the term 'aggies' originates from, in reference to how prevelant this once was to everyone involved with the community.";
        document.getElementById('para2').innerHTML='The images in this panel include a map of Yolo County, the County seal, the West Sacramento port, and the Yocha DeHe Wintun Nation. The Patwin tribe who originally inhabited the land that would become Davis were members of the Wintun Nation and it continues to be an important partner for the County.';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function marketpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="Farmer's Market & Biking";
        document.getElementById('piece').setAttribute('src', 'images/market.png');
        document.getElementById('para1').innerHTML=`One of Davis' most well known features is its <a href="https://www.davisfarmersmarket.org/">Famer's Market.</a> It is the result of a combined effort from farmers, students, city officials, and the community at large. The most significant benefit of this market is the ability for farmers to sell their products directly to the people as well as being a major gathering event. In the spirit of this innovation of giving to the community, <a href="https://www.villagehomesdavis.org/">the Village Homes</a> are also reprsented.`;
        document.getElementById('para2').innerHTML='Biking also has a major presence in both this panel, and Davis as a whole. Davis was the first city in the nation to have bike laes in on city streets, nd required singificant changes to cehicle design as well as standards and regulations of city planning.';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function selmapage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="Community & Selma March";
        document.getElementById('piece').setAttribute('src', 'images/selma.png');
        document.getElementById('para1').innerHTML=`Several historical events are depicted here that represent humanitarian and social Justice efforts. Near the top of the panel, Davis Community Meals and Housing is a nonprofit providing meals to those in need, and Doctor John H Jones started the Davis Free Clinic (now <a href="https://communicarehc.org/">Communicare</a>) to provide health care to those without proper insurance. The march to from Selma to Montgomery in 1956 is also prominently featured, which was a response to Martin Luther King Jr.'s call to action after <a href="https://calendar.eji.org/racial-injustice/mar/07#:~:text=On%20March%207%2C%201965%2C%20state,the%20state%20capitol%20in%20Montgomery.">Bloody Sunday.</a>`;
        document.getElementById('para2').innerHTML='Shown lower on the panel, Measure A was a campaign in 1978 to divest from South Africa. The California Institute for Ruaal Studies an the California Agrarian Action project are also shown, which improved working conditions for farmers and built an agricultural system with sustainability in mind.';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function universitypage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="UC Davis";
        document.getElementById('piece').setAttribute('src', 'images/university.png');
        document.getElementById('para1').innerHTML=`The University of California's Davis location has had a major influence on the town and the region as a whole. Represented here are multiple forms of enrichment introduced by the university, including the <a href="https://arboretum.ucdavis.edu/">Arboretum,</a> the <a href="https://www.mondaviarts.org/events/upcoming-events?gad=1&gclid=CjwKCAjw-IWkBhBTEiwA2exyO5fjpD5emQtnwJpjeFAN0qbcYUpkzyV88NY-EBIFpuyom25E8SHPzxoCOBYQAvD_BwE">Mondavi Performing Arts Center,</a> and Robert Arneson's Egghead art project.`;
        document.getElementById('para2').innerHTML='Also represented in this panel are community-driven contributions, such as The International House which today is an important cultural center, and Unitrans, a student-ran bus service. The Arboretum also has ties to the community , as it respects the native land and the people who originally inhabited it.';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function farmpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="University Farm & Davisville";
        document.getElementById('piece').setAttribute('src', 'images/farm.png');
        document.getElementById('para1').innerHTML="The history of the city's founding and incorporation are shown here, including the original name for the town-Davisville. The early days of the town was defined by farmers and cattle ranchers, and the cow has been a symbol for the city ever since. The panel also shows people rowing a boat from Davis to Sacramento in the wet season, and the Davis Junction on the railroad being established.";
        document.getElementById('para2').innerHTML=``;
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function townnamepage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="Davis Enterprise & Town Name";
        document.getElementById('piece').setAttribute('src', 'images/townname.png');
        document.getElementById('para1').innerHTML=`Once the University farm was implemented, the town's name was changed to Davis to appear more sophisticated. The Yolo Causeway is also shown here, along with Route 40 as a result of it, which brought massive development opportunities to Davis. These cemented the connection of the city and the university, symbolized by the <a href="https://localwiki.org/davis/Davis_Arch">Davis Arch</a> and the 'town and gown' analogy.`;
        document.getElementById('para2').innerHTML='This panel also shows the Great Fire of 1916, which brought the development of significant city servies, and the vote to incorporate in 1917.';
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function patwinpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="The Patwin Tribe";
        document.getElementById('piece').setAttribute('src', 'images/patwin.png');
        document.getElementById('para1').innerHTML="The ring radiating around the central image is an early history of the land that Davis is built on. This begins with the native Patwin People, and the arrival of European missionaries and Spanish settlers. The Spanish sovereignty is represnted by the New Spain Viceroyalty's coat of arms, as well as the coat of arms for an inedependent Mexico when it became the sovereignty.";
        document.getElementById('para2').innerHTML="Also featured here are native animals of the Putah Creek, the Farm of Jerome Davis who would be the namesake of the city, and the Great Seal of California to represent the admission of California into the United States. This ring overall represents a massive hange in the land, and the transition through multiple eras and cultures being introduced.";
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function mappage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="Crossroads";
        document.getElementById('piece').setAttribute('src', 'images/map.png');
        document.getElementById('para1').innerHTML="Depicted here are the geography and infrastructure that are at the core of the city's history. They are depicted as crossroads due to how they each intertwine with the rest of the seal's narrative.";
        document.getElementById('para2').innerHTML="The crossroads include Putah Creek, the Railroad, the Lincoln Highway, Interstate 80, Highway 113, and the Pacific Flyway being represented by the migrating birds on the major panels.";
        document.getElementsByTagName('section')[0].className = 'visible';
    }

    function finalringpage(event){
        event.preventDefault();
        document.getElementsByTagName('main')[0].setAttribute('class', 'hidden');
        console.log('main will now be invisible');
        document.getElementById('piecename').innerHTML="Flora and Fauna";
        document.getElementById('piece').setAttribute('src', 'images/finalring.png');
        document.getElementById('para1').innerHTML=`The outer ring of the seal is a collection of imagery of natural elements native to Putah Creek. This honors the original people of this land and the natural landscape, as well as celebrating the restoration of the creek. The land surrounding it was the original reason people first established their farms in the area.`;
        document.getElementById('para2').innerHTML=`<a href="http://www.putahcreeklegacy.com/">The restoration of Putah Creek</a> led to an increase in multiple native species, including the return of the Steelhead Trout. This event is considered the ideal result of habitat restoration, and further strengthens the connection between the city and the university due to the massive collaborative effort involved. These anels represent the cooperation, vision, and leadership required to make it a reality.`;
        document.getElementsByTagName('section')[0].className = 'visible';
    }
})()