var aside = document.getElementById('aside-image');
var images = document.querySelectorAll("#menu img");

for (i = 0; i < images.length; i++) {
    image = images[i];
    image.setAttribute("class", "hide");

    text = image.previousElementSibling

    text.onclick = function (pics) {
        img = this.nextElementSibling;
        path = img.getAttribute('src');
        aside.setAttribute('src', path);
        aside.removeAttribute('class');
    }
}

var add_text = document.createElement("p");
var text = document.createTextNode("Click on menu item to see picture");
add_text.appendChild(text);

var add = document.getElementById("menu");
add.insertBefore(add_text, add.childNodes[2]); console.log(add);