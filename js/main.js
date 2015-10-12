$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 640) {
        $("#header-sroll").addClass("small")
    } else {
        $("#header-sroll").removeClass("small")
    }
});