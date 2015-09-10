var i, addText, linkSrc, listImgs, imageLinks, imag, textTarget;

listImgs = document.querySelectorAll("#menu img");
imageLinks = document.getElementsByClassName("menu-item");
textTarget = document.getElementById("espresso");

var MenuOnClick = function () {
    "use strict";
    linkSrc = this.nextSibling;
    document.getElementById("aside-image").setAttribute("class", "visible");
    document.getElementById("aside-image").src = linkSrc.src;
}

for (i = 0; i < listImgs.length; i++) {
    imag = listImgs[i];
    imag.setAttribute("class", "hide");

    imageLinks[i].addEventListener('click', MenuOnClick, false);
}

addText = document.createTextNode("Click a menu item to view a picture.");
textTarget.parentNode.insertBefore(addText, textTarget);