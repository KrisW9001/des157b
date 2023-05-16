(function(){
    'use strict';
    console.log('reading js');

    const vidorder = ['media/part1.mp4', 'media/part2.mp4', 'media/part3.mp4', 'media/part4.mp4', 'media/part5.mp4', 'media/part6.mp4', 'media/part7.mp4', 'media/part8.mp4', 'media/part9.mp4'];
    let currentvid = 0;
    let media = document.querySelector('video');
    let vidsource = document.querySelector('#source').getAttribute('src');
    // let vidsource = document.querySelector('#source');

    // vidsource = vidorder[currentvid];

    
    document.querySelector('#next').addEventListener('click', function(event){
            event.preventDefault();
            currentvid++;
            document.querySelector('#source').src = vidorder[currentvid];
            console.log(currentvid);
            console.log(vidorder[currentvid]);
            media.play();
    })

    document.querySelector('#back').addEventListener('click', function(event){
        event.preventDefault();
        currentvid--;
        document.querySelector('#source').src = vidorder[currentvid];
        console.log(currentvid);
        console.log(vidorder[currentvid]);
        media.play();
    })
    
})()