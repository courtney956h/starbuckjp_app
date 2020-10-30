(function($){

    // home 클릭하면 main.html의 #content를 load()
    $('#wrap').on('click', '#quickMenu .home a, .mobile_btn a, #quickMenu .icon a, .mobileOrder_list .depth1 > a, .prev_btn a', function() {
        var url = this.href;
        $('#container > #content').remove();
        $('#container').load(url + ' #content');
        return false;
    })

    


    // mobileOrder_nav, storeSelect_nav 클릭시 current 유지
    $('#wrap').on('click', '.mobileOrder_nav a, .storeSelect_nav a', function() {
        $('.mobileOrder_nav a.current, .storeSelect_nav a.current').removeClass('current')
        $(this).addClass('current')
    })

    // quickMenu 클릭시 current 유지
    $('#quickMenu .icon').on('click', function() {
        $('#quickMenu .icon.current').removeClass('current')
        $(this).addClass('current')
    })

    // 헤더박스 스크롤 이벤트시 fixed
    $(window).scroll(function() {
        var sct = $(this).scrollTop()
        if ( sct>=95 && !$('#header, #reward_header, #mobileOrder_header').hasClass('on') ) {
            $('#header, #reward_header, #mobileOrder_header').addClass('on')
            // $('#header').stop().slideDown(500).addClass('on')
        } else if ( sct<95 && $('#header, #reward_header, #mobileOrder_header').hasClass('on') ) {
            $('#header, #reward_header, #mobileOrder_header').removeClass('on')
        }
    })

    // $('#content').on('click', '.storeSelect_nav a', function() {
    //     e.preventDefault()
    //     var newCotent = ''
    //     for (var i in map[loc]) {
    //         newCotent +=
    //     }
    // })

})(jQuery)