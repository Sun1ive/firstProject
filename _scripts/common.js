$(window).on("load", function () {

    $(".tab-h").on("click", function (event) {
       var that = $(this);

       if (that.hasClass("tab-h")) {
        var dataTab = $(this).attr("data-tab");

        var tabH = $(".tab-h");
        for (var i = 0; i < tabH.length;i++) {
            $(tabH[i]).removeClass("active");
        }

        that.addClass("active");
        var tabBody = $('.tab-b');
        for (var i = 0; i < tabBody.length; i++) {
            if (dataTab == i) {
                $(tabBody[i]).css("display", "block");
            } else {
            $(tabBody[i]).css("display", "none");
            }
       }
        }
    });


    var winHeight = $(document).height();
    var step = 2;
    var timeToScroll = winHeight/step;

    $('.scrollTop').on('click', function(){

        $('html, body').animate({
            scrollTop: 0
        }, timeToScroll);
    });


    $(".myButton").on("click", function () {
        $('html, body').animate({
            scrollTop: 1500
        }, timeToScroll);
    });




});

// $(window).on("load", function(){

//     var winHeight = $(document).height();
//     var step = 2;
//     var timeToScroll = winHeight/step;

//     $('.scrollTop').on('click', function(){

//         $('html, body').animate({
//             scrollTop: 0
//         }, timeToScroll);
//     });


// });