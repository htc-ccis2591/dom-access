(function () {

    document.getElementById('menu').appendChild(document.createTextNode('Click on a menu item to see the image.'));

    var clkImage = document.getElementsByTagName('img');
    var showPics = document.getElementsByClassName('menu-item');

    for (var i = 0; i < clkImage.length; i++) {
        clkImage[i].style.visibility = 'hidden';
    }

    showPics[0].addEventListener('click', function () {
        clkImage[1].style.visibility = 'visible'
    });

    showPics[1].addEventListener('click', function () {
        clkImage[2].style.visibility = 'visible'
    });

    showPics[2].addEventListener('click', function () {
        clkImage[3].style.visibility = 'visible'
    });

    showPics[3].addEventListener('click', function () {
        clkImage[4].style.visibility = 'visible'
    });

    showPics[4].addEventListener('click', function () {
        clkImage[5].style.visibility = 'visible'
    });

    showPics[5].addEventListener('click', function () {
        clkImage[6].style.visibility = 'visible'
    });

    showPics[6].addEventListener('click', function () {
        clkImage[7].style.visibility = 'visible'
    });

    showPics[7].addEventListener('click', function () {
        clkImage[8].style.visibility = 'visible'
    });

    showPics[8].addEventListener('click', function () {
        clkImage[9].style.visibility = 'visible'
    });

    showPics[9].addEventListener('click', function () {
        clkImage[10].style.visibility = 'visible'
    });

    showPics[10].addEventListener('click', function () {
        clkImage[11].style.visibility = 'visible'
    });

}());