video = "";
Item = "";
status = null;

function preload()
{
   Item = localStorage.getItem('video');
   video = createVideo(Item);
   video.hide();
}
function setup()
{
    canvas = createCanvas(480, 300);
    canvas.center();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status : Detecting Objects';
}
function modelLoaded()
{
    console.log('Coco SSD initialized');
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}