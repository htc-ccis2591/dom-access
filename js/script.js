var menuItems = document.getElementsByClassName("menu-item");
console.log(menuItems);
for ( i=0; i < menuItems.length; i++) {
    var item = menuItems[i];
    var image = item.nextElementSibling;
    console.log(image);
    
    image.setAttribute("class", "hide");
    console.log(image);
    item.onclick = function() {
        image = this.nextElementSibling;
    var path = image.getAttribute("src");
    console.log(path);
    var asideImg = document.getElementById("aside-image");
    asideImg.setAttribute("src", path);
    }
}

/*
//var h3s = document.querySelectorAll("#menu h3");
//
//for(i=0; i< h3s.length; i++) {
//    oneHeading = h3s[i]
//    oneHeading.setAttribute("class", "hide");
//}
//
var imgCap = document.getElementById('imageCap').style.display = 'none';
//imgCap

var imgs = document.getElementsByTagName("span");
for (i = 0; i < imgs.length; i++) {
    current = imgs[i];
    current.onclick = function(hide) {
        text = this.firstChild;
        alert(text.nodeValue);
    }
}

function hide() {
    alert("Hidding");
    this.setAttribute("menu-item", "hide");
}








//var headings = document.getElementsByTagName("h2");
//console.log(headings);
//
////when you get elements by tag name you get back an array
////even if it's only one element. so headings is an array
//
//for (i = 0; i < headings.length; i++) {
//    current_heading = headings[i]
//    alert("Heading is: " + current_heading.firstChild.nodeValue);
//}
//
//var headings = document.getElementsByTagName("h6");
//console.log(headings);
//
//for (i = 0; i < headings.length; i++) {
//    current_heading = headings[i]
//    alert("This Wont Happen");
//}
//
//var menu = document.getElementById("menu");
//console.log(menu);
//
//console.log("Logging the first child of menu to see what it is.");
//console.log(menu.firstChild);
//console.log("Logging the first Element child of the menu to see what it is");
//console.log(menu.firstElementChild);
//
////let's log all the children one at a time
////how to do this Hi Google
////var menu_children = menu.childNodes
//var menu_children = menu.children
//console.log("Logging in the children of menu:");
//console.log(menu_children):
//
////Let's add a click handler to alert text in each child
//for(i = 0: i < menu_children.length; i++) {
//    child = menu_children[i];
//    child.onclick = function() {
//        if(this.firstElementChild != null) {
//            alert("The Child is: " + this.firstElementChild.nodeName):
//        } else if (this.firstChild != null) {
//            alert("The child is: " + this.firstChild.nodeValue);
//        } else {
//            alert("The element " + this.nodeName + " has no children.");
//        }
//    };
//}
////another way
//
//menu_headings = menu.getElementsByTagName("h2");
//








              











//
//function showImage()

//function seePic(){
//    document.getElementById('imageCap').style.visibility='visible';
//}
    //{
//    
//   imgCap = document.getElementById('imageCap').style.display;
//}

//var btnCap = document.getElementById("imageCap");
//btnCap.addEventListener("click", imgCap.style.display, false);


//imgCap.onclick = (document.getElementById('imageCap').style.display);
//var foodImg = document.getElementsByClassName('menu-item').style.display = 'none';



//var tagline = document.getElementById("Cappuccino");
//
//targetArea.removeChild(tagline);


*/
