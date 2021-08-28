song = "";
function preload()
{
    song = loadSound("op.mp3");
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550)
    canvas.position(560,150)
}

function play()
{
    song.play();
}
