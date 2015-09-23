var pictures = document.getElementsByTagName("img"),
    picturesCount = pictures.length,
    i;

for (i = 0; i < picturesCount; i = i + 1) {
    
    
        
    pictures[i].setAttribute("class", "hide");
        
    

}
var menu = document.getElementsByTagName("h2");
var p = document.createElement("p");
var snip = document.createTextNode("Click on a Menu Item to see a Picture of it");
p.appendChild(snip);
menu[0].appendChild(p);



    
var picTitle = document.getElementsByTagName("span");



picTitle[0].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[1].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);

picTitle[1].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[2].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);

picTitle[2].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[3].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);

picTitle[3].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[4].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);
                                           
picTitle[4].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[5].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);

picTitle[5].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[6].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);

picTitle[6].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[7].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);

picTitle[7].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[8].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);

picTitle[8].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[9].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);

picTitle[9].addEventListener("click", function () { "use strict";
    pictures[0].setAttribute("src", pictures[10].getAttribute("src"));
    pictures[0].removeAttribute("class");
    }, false);
        
