function hidePics() {
    var pics = document.getElementsByTagName("img");
    for (i = 0; i < pics.length; i++) {
        pic = pics[i];
        pic.setAttribute("class", "hide")
        //onClick show...
    }
}

function textAppend() {
    var paragraph = document.createElement('p');
    paragraph.textContent = "click on any item to see a picture";
    document.body.appendChild(paragraph);
    //insertBefore?!?!?!?
}



hidePics();
textAppend();
//showPics();
