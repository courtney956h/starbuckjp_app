(function($){

    // home 클릭하면 main.html의 #content를 load()
    $('#wrap').on('click', '#quickMenu .home a, .mobile_btn a, #quickMenu .icon a, .mobileOrder_list .depth1 > a, .prev_btn a, .loginPage_btn a, .joinPage_btn a, .join_btn a, #quickMenu .pay a', function() {
        var url = this.href;
        $('#container > #content').remove();
        $('#container').load(url + ' #content');
        return false;
    })

    


    // mobileOrder_nav, storeSelect_nav 클릭시 current 유지
    $('#wrap').on('click', '.storeSelect_nav a', function() {
        var index = $(this).index();
        $(this).addClass('current')
        $(this).siblings().removeClass('current')
        $('.store_select > div').eq(index).addClass('on')
        $('.store_select > div').eq(index).siblings().removeClass('on')
    })

    $('#wrap').on('click', '.mobileOrder_nav a', function() {
        var index = $(this).index();
        $(this).addClass('current')
        $(this).siblings().removeClass('current')
        $('.mobile_order > div').eq(index).addClass('on')
        $('.mobile_order > div').eq(index).siblings().removeClass('on')
    })

    $('#wrap').on('click', '.egift_nav a', function() {
        var index = $(this).index();
        $(this).addClass('current')
        $(this).siblings().removeClass('current')
        $('.egift_order > div').eq(index).addClass('on')
        $('.egift_order > div').eq(index).siblings().removeClass('on')
    })

    // quickMenu 클릭시 current 유지
    $('#quickMenu .icon').on('click', function() {
        $('#quickMenu .icon.current').removeClass('current')
        $(this).addClass('current')
    })




    // 헤더박스 스크롤 이벤트시 fixed
    $(window).scroll(function() {
        var sct = $(this).scrollTop()
        if ( sct>=95 && !$('#header, #reward_header, #rewardsbf_header').hasClass('on') ) {
            $('#header, #reward_header, #rewardsbf_header').addClass('on')
            // $('#header').stop().slideDown(500).addClass('on')
        } else if ( sct<95 && $('#header, #reward_header, #rewardsbf_header').hasClass('on') ) {
            $('#header, #reward_header, #rewardsbf_header').removeClass('on')
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