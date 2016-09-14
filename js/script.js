(function(){
    
    var hidingPics=function(){
        var pics = document.getElementsByTagName('img');
        for (i=0; i < pics.length; i++){
            current = pics[i];
            current.setAttribute("class", "hide");
        }
    }
    hidingPics();
    var TextForMenu=function(){
        var id = document.getElementById('espresso');
        var p = document.createElement('p');
        var pTxt = document.createTextNode('Click a Menu Item to see an Image.');
        p.appendChild(pTxt);
        id.parentNode.insertBefore(p, id);  
    }    
    TextForMenu();
    var showPics=function(){
        var PicLoop = document.getElementsByTagName('li');
        for (i=0; i < PicLoop.length; i++){
            PicLoop[i].addEventListener('click', function(){
                console.log(this);
                var Li = this.firstElementChild;
                var span = Li.nextElementSibling;
                var newSideImg = document.getElementById('aside-image');
                var S = span.getAttribute('src');                
                newSideImg.setAttribute('src', S);
                newSideImg.setAttribute('class', '');
            });
            }
                                         }
    showPics();
}());
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
