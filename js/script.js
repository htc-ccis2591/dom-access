//IIFE - Immediately Invoked Function Expression
//Always do this to keep things out of global scope
(function () {
   
    var menutarget = document.getElementById("menu");
    var target = menutarget.firstElementChild;
    
    // create your new node <p>Click on an item to see an image</p>
    var newNode = document.createElement("p");
    newNode.appendChild(document.createTextNode("Click on an item to see an image"));
    
    //target.appendChild(newNode);
    //menutarget.parentElement.insertBefore(newNode,target.childNodes[1])
    menutarget.insertBefore(newNode,target.nextElementSibling);
    
    var paras = document.getElementsByTagName("img");
    for (var i=0; i<paras.length; i++){
        current = paras[i];
        current.setAttribute("class","hide");
        }
    
    // add the click method to each LI
    //access some <ul> element
   var mylist=document.getElementsByTagName("LI");
    //alert(mylist.length);
    
   for (var i=0; i<mylist.length; i++){
     mylist[i].addEventListener("click",function(e){
           // e.target is our targetted element.
           console.log(e.target.nodeName)
           
           var sidebar = document.getElementById("aside-image");
            sidebar.setAttribute("src",this.lastElementChild.src);
            sidebar.setAttribute("class","visible");
           
           
           //if(e.target && e.target.nodeName == "SPAN") {
               //if (this.lastElementChild.className == "hide"){
                   //this.lastElementChild.setAttribute("class","visible");
               //} else {
                   //this.lastElementChild.setAttribute("class","hide");
               //
	               //}
     });
       
                                }
}());

