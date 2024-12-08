
window.onload = function() {
    fetch('html/contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-container').innerHTML = data;
        });
}


