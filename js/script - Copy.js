var i, ii, linkNode, menuImgs, listNode, imageLinks, imageNode, imag;

menuImgs = document.querySelectorAll("#menu img");
listNode = document.querySelectorAll("#menu li");
imageLinks = document.querySelectorAll("#menu img src");

var swapImage = function () {
    "use strict";
    for (ii = 0; ii < imageLinks.length; ii++) {
        linkNode = imageLinks[ii];
        //if ("image/" + listNode[i] + ".jpg" = linkNode) {
        document.getElementById("aside-image").setAttribute("class", "visible");
        document.getElementById("aside-image") = new Image();
        document.getElementById("aside-image").src = linkNode;
        //}
        //var link = this;
        //var linksrc = link.getAttribute.value("img src");
        //imageNode.src = linksrc;
        //imageNode.src = linkNode.getAttribute("img src");
    }
}

for (i = 0; i < menuImgs.length; i++) {
    imag = menuImgs[i];
    imag.setAttribute("class", "hide");
    imageLinks[i] = menuImgs[i].src;

    listNode[i].onclick = swapImage;

}