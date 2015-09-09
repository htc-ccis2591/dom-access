var pics = document.querySelectorAll("#menu img");

for (i = 0; i < pics.length; i = i + 1) {
    hiddenpicture = pics[i];
    hiddenpicture.setAttribute("class", "hide");
}

console.log(pics);

/* Creates new paragraph and places it after h2 heading "Menu" */

var messagelocation = document.querySelector("#menu h2");

var newPara = document.createElement("p");
var paraText = document.createTextNode("Click on a menu item to view a picture");

newPara.appendChild(paraText);
messagelocation.appendChild(newPara);

console.log(messagelocation);

/* Searches list of images and gets source attribute */

source = document.querySelectorAll("#menu li img");

var newsource = new Array();

for (i = 0; i < source.length; i = i + 1) {
    images = source[i];
    sourcelist = images.getAttribute("src");
    console.log(sourcelist);
}

var item = document.querySelectorAll("#menu li");

for (i = 0; i < item.length; i = i + 1) {
    list = item[i];

    /* When items are "clicked" takes source of images associated with list item and places in <aside-image> image source */

    list.onclick = function () {

        var asidepic = document.getElementById("aside-image");

        asidepic.removeAttribute("class");
        asidepic.setAttribute("src", sourcelist);

        console.log(asidepic);
    }
}

console.log(item);