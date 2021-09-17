canvas = document.getElementById("mycanvas");
ctx = getContext("2d");

nasa_mars_images_array = 
[
    "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia24269-3-16.jpg",
    "https://d2pn8kiwq2w21t.cloudfront.net/images/imagesmsl20150701pia19676-16.width-1024.jpg"

]
random_number = Math.floor(Math.random()* 4);
console.log(random_number);
rover_height = 90;
rover_width = 100;

background_image = nasa_mars_images_array[random_number];
console.log("Background Image = " + background_image);
rover_image = "https://mahdihat791.github.io/v2/ADV-C84.com/rover.png";

rover_x = 10;
rover_y = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrRover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, canvas.width, canvas.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }

        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }

        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }

        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
 }

function up()
{
    if(rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, X = " + rover_x + "| Y = " + rover_y);
        uploadBackground();
        uploadrRover();
    }
}
function dpwn()
{
    if(rover_y <= 550)
    {
        rover_y = rover_y + 10;
        console.log("When down  arrow is pressed, X = " + rover_x + "| Y = " + rover_y);
        uploadBackground();
        uploadrRover();
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_y = rover_y - 10;
        console.log("When left arrow is pressed, X = " + rover_x + "| Y = " + rover_y);
        uploadBackground();
        uploadrRover();
    }
}

function right()
{
    if(rover_x <= 750)
    {
        rover_y = rover_y - 10;
        console.log("When right arrow is pressed, X = " + rover_x + "| Y = " + rover_y);
        uploadBackground();
        uploadrRover();
    }
}
