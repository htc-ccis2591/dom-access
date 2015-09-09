
function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

document.getElementById("showImage").onclick = function() {
    document.getElementById("theImage").style.visibility = "visible";
}

var  images = document.querySelectorAll("#menu img");

for (i=0; i<Images.length; i++) {
    oneImage = images[i]
    oneImage.setAttribute("images/cappuccino.jpg", "hide");
}

#var  h3s = document.querySelectorAll("#menu h3");

#for (i=0; i<h3s.length; i++) {
    #oneHeading = h3s[i]
    #oneHeading.setAttribute("class", "hide");
}

document.querySelectorAll("#menu img");
