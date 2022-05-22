let count = 0;
let isPlayed = false;
let videoNumber = 1;
let player = document.getElementById('introductionVideo');
let mp4Vid = document.getElementById('mp4Source');
player.addEventListener('ended', myHandler, false);

function myHandler(listener)
{
    if(!listener) 
    {
        listener = window.event;
    }
    
    ++videoNumber;
    ++count;
    
    if(videoNumber > 2)
    {
        videoNumber = 2;
        isPlayed = true;
    }
    
    mp4Vid.setAttribute('src', "videos/firework" + videoNumber + ".mp4");
    
    player.load();
    player.play();
    
    if(isPlayed)
    {
        let html = document.querySelector('html');
        html.style.overflow = 'visible';
        
        let video = document.getElementById('introductionVideo');
        video.style.filter = 'blur(20px) brightness(50%)';
        // video.style.maxWidth = '99vw';
        // video.style.zIndex = '0';
        
        delete count;
    }
}