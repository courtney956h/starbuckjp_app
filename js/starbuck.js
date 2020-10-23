(function($){




    // 헤더박스 스크롤 이벤트시 fixed
    $(window).scroll(function() {
        var sct = $(this).scrollTop()
        if ( sct>=100 && !$('#header').hasClass('on') ) {
            $('#header').addClass('on')
            // $('#header').stop().slideDown(500).addClass('on')
        } else if ( sct<100 && $('#header').hasClass('on') ) {
            $('#header').removeClass('on')
        }
    })

})(jQuery)