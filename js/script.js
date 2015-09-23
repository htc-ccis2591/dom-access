var Aside = document.getElementById("aside-image");
var SpanElements = document.getElementsByTagName("span");
var MenuImages = document.getElementsByTagName("img");

for (i = 0; i < MenuImages.length; i++) {
    var CurrentImage = MenuImages[i];
    CurrentImage.className = "hide";
};

SpanElements[0].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[1].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
false);

SpanElements[1].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[2].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
false);

SpanElements[2].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[3].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
false);

SpanElements[3].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[4].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
false);
                                           
SpanElements[4].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[5].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
false);

SpanElements[5].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[6].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
false);

SpanElements[6].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[7].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
false);

SpanElements[7].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[8].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
 false);

SpanElements[8].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[9].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
 false);

SpanElements[9].addEventListener("click", function () { 
    "use strict";
    MenuImages[0].setAttribute("src", MenuImages[10].getAttribute("src"));
    MenuImages[0].removeAttribute("class");
    }, 
false);

var MenuHeadings = document.getElementsByTagName("h2");
var NewParagraph = document.createElement("p");
var NewTextLine = document.createTextNode("Click on any menu item to see an image of your selection!")
NewParagraph.appendChild(NewTextLine);
MenuHeadings[0].appendChild(NewParagraph);