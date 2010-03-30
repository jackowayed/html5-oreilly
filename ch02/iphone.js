if (window.innerWidth && window.innerWidth <= 480) {
    $(document).ready(function(){ 
        $('#header ul').hide();
        $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');
    }); 
    function toggleMenu() {
        $('#header ul').toggle();
        $('#header .leftButton').toggleClass('pressed');
    }
}

