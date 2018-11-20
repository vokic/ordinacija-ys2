
$(document).ready(function () {

    // TRIGER TABS
    var pathname = document.URL;
    var tabLocation = pathname.split("#");
    tabLocation = tabLocation[1];

    console.log($(".left-nav a[href^=" + tabLocation + "]"));

    setTimeout(function () {
        $(".left-nav a[href^=" + tabLocation + "]").trigger('click');
    }, 10);

    // TABS
    $('.service-separate .left-nav li a').on('click', function (event) {
        event.preventDefault();
        /* Nav */
        $('.service-separate .left-nav li').removeClass('selected');
        $(this).parent('li').addClass('selected');
        var addressValue = $(this).attr("href");
        // alert(addressValue );
        /* Content */
        // $('.service-description div.shown').removeClass('shown');
        // $('.service-description #' + addressValue).addClass('shown');
        $('.service-description div.tab-content').hide();
        $('.service-description #' + addressValue).fadeIn();
        /* Add to url */
        $(window.location.hash).click();
    });

    $('#services a.testic').on('click', function (event) {
        // event.preventDefault();
        /* Nav */
        $('.service-separate .left-nav li').removeClass('selected');
        $(this).parent('li').addClass('selected');
        var addressValue = $(this).attr("title");
        // alert(addressValue );
        /* Content */
        // $('.service-description div.shown').removeClass('shown');
        // $('.service-description #' + addressValue).addClass('shown');
        $('.service-description div.tab-content').hide();
        $('.service-description #' + addressValue).fadeIn();
        /* Add to url */
        $(window.location.hash).click();
    });

});