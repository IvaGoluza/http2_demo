window.addEventListener('load', function() {
    var textContentElement = document.getElementById('text2');

    fetch('tekst2.txt')
        .then(response => response.text())
        .then(data => {
            var p = document.createElement('p');
            p.textContent = data; 
            textContentElement.appendChild(p);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});