
// IIFE - Immediately Invoked Function Express 
// Always do this to keep things out of global scope
function myFunction(){
    document.getElementById("menu").style.visibility = "visible";
    
    var menu = document.createElement('INPUT');
    //var menuImage = document.createTextNode('Welcome!');
    //var brTag = document.createElement('br');
    //var specialText = document.createTextNode('We got a sale today!');
    
    var headerElements = document.getElementsByTagName('header');
    
    //var button = document.getElementsById('clickme');
    
    if (headerElements.length > 0){
        headerElements[0].appendChild(menu);
        menu.appendChild("imgArray" ,"hidden");
        //menu.appendChild;
        menu.appendChild(menu);
    }
    
    // Setup an event handler for clicking the button!
    button.addEventListener("click", function(){
       document.getElementById('menu').appendChild(document.createTextNode('This was a long night!')) ;
    });
    
    // Let's float our info bar to the right by adding a style class
    var classAttribute = document.createAttribute("menu-item");
    classAttribute.value = 'float-right';
    infoBar.setAttributeNode(classAttribute);
    
    // Let's look at how to navigate through the DOM with properties
    // We're going to get the first child of the header which is the info bar we added
    
    console.log(headerElements[0].firstChild);
    
    // The above gave us the text, what if we want the element
    console.log(headerElements[0].firstElementChild);
    


///
var menu = document.createElement('div');

var cappuccino = ["Espresso", "Latte", "Mocha", "Breve", "Americano"];



console.log(menu[0].firstChild);
document.selectElementsByTagName(espresso.jpg)
document.selectElementById(latte.jpg)
document.selectElementById(mocha.jpg)
document.selectElementById(breve.jpg)
document.selectElementById(americano.jpg)
Menu.getAttribute(attributeName)

var bakery = ["Scones", "Muffins", "Brownies", "Choc-Cake", "White-Cake"];

console.log(bakery[0].firstChild);
document.selectElementsByTagName(bakery)
document.selectElementById(scones.jpg)
document.selectElementById(muffins.jpg)
document.selectElementById(brownies.jpg)
document.selectElementById(choc-cake.jpg)
document.selectElementById(white-cake.jpg)
Bakery.getAttribute(attributeName)




menu.getAttribute(Cappuccino)

bakery.getAttribute(Bakery)

///function infoBar() {
    ///document.getElementById("Menu").style.visibility = "hidden";
}


///(function myFunction()) {
   /// var x = document.getElementById("mySelect").options.length;
   /// document.getElementById("demo").innerHTML = "Found " + x + " options in the list.";



////