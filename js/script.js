var images = document.querySelectorAll("#menu img");

for (i = 0; i < images.length; i++) {

    var image = images[i];
    image.setAttribute("class", "hide");

    var target = document.getElementById("aside");
    var p = document.createElement(image);
    aside.appendChild(p);
    
 
}