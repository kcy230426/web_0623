$(document).ready(function(){
    $(window).scroll(function(){
        // 스크롤을 하면
        if($(window).scrollTop() > 80){
            // 스크롤의 위치가 80보다 커지면
            $("body").addClass("scroll");
            // body에 scroll 클래스를 삽입해라.
        }else{
            $("body").removeClass("scroll")
        };  })
    $("#gnb li").click(function(){
        $("#gnb li").removeClass("bolding")
        $(this).addClass("bolding")
    })
})