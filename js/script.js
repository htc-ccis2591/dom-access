var aside = document.getElementById('aside-img');
var images = document.querySelectorAll("#menu img");

for (i = 0; i < images.length; i++) {
    heading = images[i];
    heading.setAttribute("class", "hide");
}
images.onclick = function () {
    pics = document.getElementsByTagName('aside');
    p = document.createElement('images');
    aside.appendChild(p);
}