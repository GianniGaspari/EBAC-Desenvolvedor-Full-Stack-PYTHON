document.addEventListener('DOMContentLoaded', function() {
    const modalExemplo = new bootstrap.Modal('#exemplo-modal');
    setTimeout(function() {
        modalExemplo.show();
    }, 3000);
})