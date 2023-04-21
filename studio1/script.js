(function(){
    'use strict';
    console.log('reading js');

    const vidorder = ['media/part1.mp4', 'media/part2.mp4', 'media/part3.mp4', 'media/part4.mp4', 'media/part5.mp4', 'media/part6.mp4', 'media/part7.mp4', 'media/part8.mp4', 'media/part9.mp4'];
    let currentvid = 0;
    const media = document.querySelector('video');
    // let vidsource = document.querySelector('#source');

    // vidsource = vidorder[currentvid];

    document.querySelector('#next').addEventListener('click', function(event){
        event.preventDefault();
        currentvid++;
        document.querySelector('#source').innerHTML(`id="source" src="${vidorder[currentvid]}" type="video/mp4"`);
        console.log(currentvid);
        media.play();
    })



})()