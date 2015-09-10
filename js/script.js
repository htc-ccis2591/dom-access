

menuImgs = document.querySelectorAll("#menu img");
imageLinks = document.getElementsByClassName("menu-item");


for (i = 0; i < menuImgs.length; i++) {
    imag = menuImgs[i];
    imag.setAttribute("class", "hide");

    imageLinks[i].addEventListener('click', setImageVisible, false);
}

//var  h3s = document.querySelectorAll("#menu h3");

function setImageVisible() {
var path = this.nextElementSibling.getAttribute("src");
    img = document.getElementById("aside-image");
    img.setAttribute("src",  path);
    img.removeAttribute("class");
}

