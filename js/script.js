
var image = document.querySelectorAll("#menu img"),
    imageCount = image.length,
    i;
var description = document.getElementsByTagName("li"),
    desCount = description.length,
    x,
    picture = 0;

for (i = 0; i < imageCount; i++) {
    picture = image[i];
    picture.setAttribute("class", "hide");
}

console.log("the picture disapper");

var text = "",
    image = "",
    asideImage = "",
    li = 0;

for (x = 0; x < desCount; x++) {
    li = description[x];
    text = li.firstChild;
    image = li.lastChild;


    text.onclick = function () {
        asideImage = document.getElementById("aside-image");
        asideImage.removeAttribute("class");
        var path = this.nextElementSibling.getAttribute("src");
        asideImage.setAttribute("src", path);
    };
}

console.log("Bring the picture back on click");


document.getElementById("Message").innerHTML = "Click menu names for pictures!";

console.log("message to click for the picture");