window.onload = function() {
    var container1 = document.getElementById('images1');
    var container2 = document.getElementById('images2');
    var container3 = document.getElementById('images3');

    for (var i = 0; i < 199; i++) {
        if (i === 49) continue;
        var img1 = document.createElement('img');
        img1.src = 'slike/fashion' + i + '.jpg';
        img1.alt = 'moda ' + i;
        container1.appendChild(img1);
    }

    for (var j = 199; j < 299; j++) {
        var img2 = document.createElement('img');
        img2.src = 'slike/fashion' + j + '.jpg';
        img2.alt = 'moda ' + j;
        container2.appendChild(img2);
    }

    for (var k = 299; k <= 399; k++) {
        var img3 = document.createElement('img');
        img3.src = 'slike/fashion' + k + '.jpg';
        img3.alt = 'moda ' + k;
        container3.appendChild(img3);
    }
};
