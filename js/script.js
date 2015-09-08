var content=document.querySelector("h2");
var p = document.createElement("p");
var pText = document.createTextNode("Click a menu item to view a picture.");
p.appendChild(pText);
content.appendChild(p);


var imgs = document.querySelectorAll("#menu img");
for (var i = 0; i < imgs.length; i++) 
{
    oneImage = imgs[i];
    oneImage.setAttribute("class", "hide");
    oneImage.previousElementSibling.addEventListener("click", hideshow, false);
}


function hideshow()
{
    var asideimage = document.getElementById('aside-image');
    var imagepath=this.nextElementSibling.getAttribute("src");
    asideimage.setAttribute("src",imagepath);
    asideimage.removeAttribute("class");

}



