(function () {
    var textnode = document.createTextNode("Click on a menu item to see the image!");
    var menu = document.getElementById('menu');
    var image = menu.getElementsByTagName('img');
    var aside = document.getElementById('aside-image');
    var span = menu.getElementsByTagName('span');


    for (var i = 0; i < image.length; i++) {
        var classAttribute = document.createAttribute("class");
        classAttribute.value = 'hide';
        image[i].setAttributeNode(classAttribute);


        span[0].addEventListener("click", function(){
            aside.src = image[0].src;
            aside.removeAttribute("class");
        });
        span[1].addEventListener("click", function(){
            aside.src = image[1].src;
            aside.removeAttribute("class");
        });
        span[2].addEventListener("click", function(){
            aside.src = image[2].src;
            aside.removeAttribute("class");
        });
        span[3].addEventListener("click", function(){
            aside.src = image[3].src;
            aside.removeAttribute("class");
        });
        span[4].addEventListener("click", function(){
            aside.src = image[4].src;
            aside.removeAttribute("class");
        });
        span[5].addEventListener("click", function(){
            aside.src = image[5].src;
            aside.removeAttribute("class");
        });
        span[6].addEventListener("click", function(){
            aside.src = image[6].src;
            aside.removeAttribute("class");
        });
        span[7].addEventListener("click", function(){
            aside.src = image[7].src;
            aside.removeAttribute("class");
        });
        span[8].addEventListener("click", function(){
            aside.src = image[8].src;
            aside.removeAttribute("class");
        });
        span[9].addEventListener("click", function(){
            aside.src = image[9].src;
            aside.removeAttribute("class");
        });
        
    }
    
    menu.appendChild(textnode);
    menu.insertBefore(textnode, menu.childNodes[2]);

}());
