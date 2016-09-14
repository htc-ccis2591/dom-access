(function (){
var textnode = document.createTextNode("Click on a menu item to see the image!");
var menu = document.getElementById('menu');
var image = menu.getElementsByTagName('img');
var span = menu.getElementsByTagName('span');

for (var i = 0; i < image.length; i++) {
    var classAttribute = document.createAttribute("class");
    classAttribute.value = 'hide';
    image[i].setAttributeNode(classAttribute);
}


menu.appendChild(textnode);
menu.insertBefore(textnode, menu.childNodes[2]);

}());
