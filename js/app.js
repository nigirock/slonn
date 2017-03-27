$( document ).ready(function() {
    var firstLi = $(".navbar-nav").children().first();
    var widthScreen = $(window).width();
    var page = $("a[rel='m_PageScroll2id']");
    if(widthScreen <= 680){
        page.mPageScroll2id({
            offset:65
        });
    }else{
        page.mPageScroll2id({
            offset:120
        });
    }

    $(".rslides").responsiveSlides({
        auto: true,
        speed: 2000,
        timeout: 6000
    });

    var name = $("input[name='name']");
    var text = $("textarea[name='text']");
    console.dir(name);
    $(".form").submit(function(){
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            alert("Спасибо за отзыв!");
            name.val("");
            text.val("");
        });
        return false;
    });
    $(".item-library").magnificPopup({
       type: "image",
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        }
    });
});

var mainBlock = angular.module("App",[]);
mainBlock.controller("mainBlockCtrl",function($scope){
    $scope.list = model;
});