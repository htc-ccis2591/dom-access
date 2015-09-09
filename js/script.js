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
document.getElementById('text').innerHTML = "<p>Click on menu item to view picture</p>";