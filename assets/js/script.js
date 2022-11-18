document.addEventListener("DOMContentLoaded", function(event) {

    // activacion tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // variables 
    var navbar = document.getElementById('navbar');


    // funcion para navbar scroll desktop

    function scrollnav() {

        if (document.body.scrollTop > 50) {
            navbar.classList.add('bg-success');
        } else {
            navbar.classList.remove('bg-success');
        }
    }

    window.onscroll = function() {scrollnav()};

});