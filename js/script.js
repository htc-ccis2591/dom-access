(function () {
  
     var menuText = function () {
            var target = document.getElementById('menu').firstElementChild; //target = <h2> because <Section>'s first child is <h2>

        var txt = document.createTextNode("You can click on an item on our menu to see a picture!");

            target.parentNode.insertBefore(txt, target.nextSibling); //.nextSibling refers to <h3>

}
        //referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

    menuText();
    var hideImg = function () {
        var images = document.getElementsByTagName("img");
        for (i = 0; i < images.length; i++) {
            current = images[i];
            current.setAttribute("class", "hide");
}
}

    hideImg();

    //needs work below

    var showImg = function () {
        var listItems = document.getElementsByTagName("li");
        for (i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener("click", function () {

                var thingClickedOn = this;
                var spanTag = thingClickedOn.firstElementChild;
                var imgTag = spanTag.nextElementSibling;
                console.log(imgTag);

                var asideImage = document.getElementById("aside-image");
              var source = imgTag.getAttribute("src");
              asideImage.setAttribute("src", source);
              asideImage.setAttribute("class", '');
});
}
 
}
     showImg();
}()); 