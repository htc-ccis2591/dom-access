


var imgselect = document.getElementsByTagName("img");

for (var i = 0; i < imgselect.length; i++) {
    imgselect[i].style.visibility = "hidden";
}

var items = document.getElementsByClassName("menu-item");

items[0].addEventListener("click", function () { imgselect[1].style.visibility = "visible" });
items[1].addEventListener("click", function () { imgselect[2].style.visibility = "visible" });
items[2].addEventListener("click", function () { imgselect[3].style.visibility = "visible" });
items[3].addEventListener("click", function () { imgselect[4].style.visibility = "visible" });
items[4].addEventListener("click", function () { imgselect[5].style.visibility = "visible" });
items[5].addEventListener("click", function () { imgselect[6].style.visibility = "visible" });
items[6].addEventListener("click", function () { imgselect[7].style.visibility = "visible" });
items[7].addEventListener("click", function () { imgselect[8].style.visibility = "visible" });
items[8].addEventListener("click", function () { imgselect[9].style.visibility = "visible" });
items[9].addEventListener("click", function () { imgselect[10].style.visibility = "visible" });
items[10].addEventListener("click", function () { imgselect[11].style.visibility = "visible" });





