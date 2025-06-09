document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('¡Mensaje enviado!');
        form.reset();
    });
});
