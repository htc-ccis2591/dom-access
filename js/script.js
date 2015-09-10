var imgs = document.querySelectorAll("#menu img");
var asideImage = document.getElementById("aside-image");
for (i = 0; i < imgs.length; i++) {
    image = imgs[i];
    image.setAttribute("class", "hide");
    var text = image.previousSibling;
    text.onclick = function () {
        image = this.nextSibling;
        var path = image.getAttribute("src");
        asideImage.setAttribute("src", path);
        asideImage.removeAttribute("class");
    }
}
var paragraph = document.createElement("p");
var instructions = document.createTextNode("Click on an item to view its image");
paragraph.appendChild(instructions);
var elemant = document.getElementById("instructions");
elemant.appendChild(paragraph);