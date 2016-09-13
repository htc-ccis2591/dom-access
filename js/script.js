//Adding text to Menu
var menuElement = document.getElementsByTagName("h2");
var menuNav = document.createElement("div");
var menuContext = document.createTextNode("Click on Images to Enlarge.");

menuElement[0].appendChild(menuNav);
menuNav.appendChild(menuContext);

//Hiding Images
var imgDiv = document.createAttribute("div");
var menuImages = document.getElementsByTagName("img");
var hideAttribute = document.createAttribute("hide");
hideAttribute.value = 'hide';


menuImages[1].setAttributeNode(hideAttribute);


//var hideMenuImages = function (){
//    document.getElementsByTagName("img").style.visibility = "hidden";
//}