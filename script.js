// List of images using raw GitHub URLs
let images = [
    "https://github.com/wilson-wour/love-page/blob/main/images/1.jpg?raw=true",
    "https://github.com/wilson-wour/love-page/blob/main/images/2.jpg?raw=true",
    "https://github.com/wilson-wour/love-page/blob/main/images/3.jpg?raw=true",
    "https://github.com/wilson-wour/love-page/blob/main/images/4.jpg?raw=true",
    "https://github.com/wilson-wour/love-page/blob/main/images/5.jpg?raw=true"
];

let index = 0;

function changeSlide() {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
}

// Change slide every 3 seconds
setInterval(changeSlide, 3000);

// Love Game response
function choose(option) {
    document.getElementById("result").innerHTML =
        "You chose: <b>" + option + "</b><br>And I owe you this! ❤️";
}
