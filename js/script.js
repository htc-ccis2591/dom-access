var img = document.getElementsByTagName("img");
for (i = 0; i < img.length; i++) {

    img2 = img[i];
    img2.setAttribute("class", "hide");
}

var words = document.getElementsByTagName("li");
for (w = 0; w < words.length; w++) {
    cappuccino = words[w];



    cappuccino.onclick = function () {
        var path = this.lastChild.getAttribute("src");
        var sideimg = document.getElementById("aside-image");
        sideimg.setAttribute("src", path);
        sideimg.removeAttribute("class");
    };
}
var type = document.getElementById("espresso");
var para = document.createElement("P");
var newtext = document.createTextNode("click to see images");
para.appendChild(newtext);
type.insertBefore(para, type.childNodes[0]);