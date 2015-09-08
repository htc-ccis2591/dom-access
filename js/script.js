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



