(function($){

    // home 클릭하면 main.html의 #content를 load()
    $('#wrap').on('click', '#quickMenu .home a', function() {
        var url = this.href;
        $('#container > #content').remove();
        $('#container').load(url + ' #content');
        return false;
    })


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