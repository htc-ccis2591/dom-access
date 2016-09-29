(function () {

//AddContextMenu
var addMenuContext = function () {
var menuElement = document.getElementsByTagName("h2");
var menuNav = document.createElement("div");
var menuContext = document.createTextNode("Click on Images to Enlarge.");

menuElement[0].appendChild(menuNav);
menuNav.appendChild(menuContext);
}

addMenuContext();

//HidingImages
var hideImg = function () {
   var menuImages = document.getElementsByTagName("img");
    var i = 0;
    for (i; i < menuImages.length; i++) {
            img = menuImages[i];
            img.setAttribute("class", "hide");
  
        }
    
}

hideImg();

//EnlargeImages
var showImg = function () {
    var menuItems = document.getElementsByClassName("menu-item");
    var i = 0;
    for (i; i < menuItems.length; i++){
        menuItems[i].addEventListener("click", function() {
            var click = this;
            var span = click.getElementsByTagName("span");
            var sideImg = document.getElementById("aside-image");
            var imgSource = span.nextElementSibling.getAttribute("src");
            
            sideImg.removeAttribute("hide");
            sideImg.setAttribute("src", "imgSource");
            
        });
    }

}

showImg();
    
}());
