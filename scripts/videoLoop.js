function callback(entry)
{
    entry[0].target.play();
    ++counter;
}

const gif = document.getElementById('kimiVideo');
const observer = new IntersectionObserver(callback);
observer.observe(gif);

let counter = 0;
let video = document.getElementById('kimiVideo');
video.addEventListener('ended', myHandler, false);

function myHandler(Vid)
{
    if(counter > 1)
    {
        video.play();
        ++counter;
    }

    if(counter == 4)
    {
        video.style.opacity = "0.2";
        return;
    }
}