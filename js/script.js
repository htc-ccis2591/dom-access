//Adding text to Menu
var menuElement = document.getElementsByTagName("h2");
var menuNav = document.createElement("div");
var menuContext = document.createTextNode("Click on Images to Enlarge.");

menuElement[0].appendChild(menuNav);
menuNav.appendChild(menuContext);

//Hiding Images
var hideImg = function () {
   var menuImages = document.getElementsByTagName("img");
    //add forloop with below
    for (i = 0; i < menuImages.length; i++)
        {
            current = menuImages[i];
            current.setAttribute("class", "hide");
  
        }
    
}

hideImg();

/*var imgDiv = document.createAttribute("div");

var img = document.images;


hideAttribute.value = "hide";

imgDiv.appendChild(menuImages[1]);

menuImages[1].setAttributeNode(hideAttribute);*/


//var hideMenuImages = function (){
//    document.getElementsByTagName("img").style.visibility = "hidden";
//}



//Jordan Code
