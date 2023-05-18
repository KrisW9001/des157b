(function() {
    function makeLower(aString) {
        return aString.toLowerCase();
    }

    console.log(makeLower("ThIs HaS a LoT oF UpPeRcAsE lEtTeRs"));

    const makeLower2 = function(bString){
        return bString.toLowerCase();
    }

    console.log(makeLower2("THIS IS BEING TYPED WITH CAPS LOCK TURNED ON"));

    const makeLower3 = (cString) => {
        return cString.toLowerCase();
    }

    console.log(makeLower3("MAN I SURE DO LOVE TYPING WITH ALL CAPS ON I REALLY LIKE IT WHEN ALL MY LETTERS LOOK LIKE BLOCKS WHEN I SQUINT"));

    const makeLower4 = dString => dString.toLowerCase();

    console.log(makeLower4("AW YEAH LETTERS LETS GOO LOOK AT ALL OF THESE CAPITAL LETTERS"));

    const doubleThing = (thingone, thingtwo) => `${thingone} ${thingtwo}`;

    console.log(doubleThing('chicken', 'sandwich'));

    const magic = () => {
        const first = "Abra";
        const second = "Kadabra";
        const third = "Alakazam";
        return `${first} ${second} ${third}`;
    }

    console.log(magic('first', 'second', 'third'));
})()