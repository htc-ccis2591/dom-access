var images = document.querySelectorAll("#menu img");

for (i = 0; i < images.length; i++) {
    heading = images[i]
    heading.setAttribute("class", "hide")
    heading.onclick = function () {
        alert('clicked the button');
    }
}