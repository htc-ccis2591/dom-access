var asidePic = document.getElementById("aside-image");
var images = document.querySelectorAll("#menu img");

console.log(asidePic)
console.log(images)

/* Hides pictures at startup and applies source of image to aside element so images can be
   displayed as list items are clicked */

for (i = 0; i < images.length; i++) {
    image = images[i];
    image.setAttribute("class", "hide");

    menuitem = image.parentElement;

    menuitem.onclick = function () {

        picture = this.lastElementChild;
        getpic = picture.getAttribute("src");
        asidePic.setAttribute("src", getpic);
        asidePic.removeAttribute("class");
    }
}

console.log(menuitem);

/* Creates new paragraph and places it after h2 heading "Menu" */

var messagelocation = document.getElementsByTagName("h2").item(0).nextSibling.nodeValue = "Click on a menu item to view a picture";

console.log(messagelocation);
