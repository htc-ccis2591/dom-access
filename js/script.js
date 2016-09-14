function hideImage() {
  var image = document.selectElementsByTagName('img');
  var classAttribute = document.createAttribute("class");
  classAttribute.value = 'hide';
  image.setAttributNote(classAttribute);
}

hideImage();
