// List of images for slideshow
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let index = 0;

function changeSlide() {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = "images/" + images[index];
}

setInterval(changeSlide, 3000);

// Love Game response
function choose(option) {
    document.getElementById("result").innerHTML =
        "You chose: <b>" + option + "</b><br>And I owe you this! ❤️";
}
