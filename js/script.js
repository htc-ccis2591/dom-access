var t = document.createTextNode("Click on menu item to view a picture.");
document.body.appendChild(t);
var aside = document.getElementById('aside-image');
var images = document.querySelectorAll("#menu img");

for (i = 0; i < images.length; i++) {
    photos = images[i];
    photos.setAttribute("class", "hide");
    photos.previousSibling.onclick = function () {
        pics = document.getElementsByTagName("aside-image");
        magic = this.nextSibling.getAttribute("src");
        aside.setAttribute("src", magic);
        aside.removeAttribute("class");
    }   
}