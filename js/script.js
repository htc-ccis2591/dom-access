var menuElement = document.getElementsByTagName("h2");
var menuNav = document.createElement("div");
var menuContext = document.createTextNode("Click on Images to Enlarge.");

//if(menuElement.length > 0){
    menuElement[0].appendChild(menuNav);
    menuNav.appendChild(menuContext);
//}

var imgHide = document.getElementsByClassName("menu-item");
var enlargedImages = document.createAttribute("class");

var menuItems = document.getElementById("");
var hideAttribute = document.createAttribute("class");
hideAttribute.value = 'hide';
menuItems.setAttributeNode(hideAttribute);
