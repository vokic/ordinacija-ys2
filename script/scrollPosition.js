
$(document).ready(function () {

    $(window).scroll(function () {
        // find the li with class 'active' and remove it
        $("nav ul li.selected").removeClass("selected");
        // get the amount the window has scrolled
        var scroll = $(window).scrollTop();
        // add the 'active' class to the correct li based on the scroll amount
        if (scroll <= 450) {
            $("#p1").addClass("selected");
        }
        else if (scroll <= 1250) {
            $("#p2").addClass("selected");
        }
        else if (scroll <= 1950) {
            $("#p3").addClass("selected");
        }
        else if (scroll <= 2850) {
            $("#p4").addClass("selected");
        } else if (scroll <= 3600) {
            $("#p5").addClass("selected");
        }
        else {
            $("#p6").addClass("selected");
        }
    });

});