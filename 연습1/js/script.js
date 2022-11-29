var allMenu = $(".nav>ul>.menu_all>.menu_wrap")
var depTwo = $(".nav>ul>li>.dep02")

$(document).ready(function(e){

    //헤더
    
    allMenu.hide();
    depTwo.hide();
    
    $(".nav>ul>.menu_all").click(function(){
        allMenu.stop().slideToggle();
        $(".nav>ul>li>span").css("color","#000");
    });
    
    
    $(".nav>ul>li").mouseenter(function(){
        $(this).find(depTwo).stop().slideDown();
        $(this).find(">a").css("color","#000").addClass("linebar");
    });
    
     $(".nav>ul>li").mouseleave(function(){
        $(this).find(depTwo).stop().slideUp();
        $(this).find("a").css("color","").removeClass("linebar");
    });
    
    
    //고급 슬라이드
    
    var container = $("#slides02"),
        slideGroup = container.find(".slideswrap"),
        slides = slideGroup.find("a"),
        nav = container.find(".slides_nav"),
        indicator = container.find(".indicator"), 
        slidesCount = slides.lengh, // 슬라이드의 길이
        indicatorHtml = "", 
        currentIndex = 0, // 배열 내 현재 처리되는 있는 값의 인덱스.
        duration = 500, // 슬라이드가 넘어가는 시간 0.5초
        easing = "easeInOutExpo", // 슬라이드 효과
        interval = "3500", // 슬라이드가 보여지는 시간 3.5초
        timer; // 마우스가 올라갔을 때 멈춤 
        
    //슬라이드 가로배열
     
    console.log(slides);
    slides.each(function(i){
        var newLeft = i * 100 + "%";
        $(this).css({left:newLeft});
        
        indicatorHtml += "<a href=''>" + (i+1) + "</a>";
        console.log(indicatorHtml);
        
    });
    //A.text(B); a요소의 b의 내용을 글씨 형태로 교체
    //A.html(B); a요소의 b의 내용을 html 형태로 교체
    indicator.html(indicatorHtml);
    
    
    //슬라이드 이동 함수
    function goToSlide(index){
        slideGroup.animate({left:-100*index+"%"}, duration, easing);
        currentIndex = index;
        //console.log(currentIndex);
    }
    
    //인디케이터로 이동
    indicator.find("a").click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        //console.log(idx);
        goToSlide(idx);
    });
    
    //좌우 네비 이동
    nav.find("span").click(function(){
        if($(this).hasClass('prev')){
            goToSlide(currentIndex-1);
           }else{
            goToSlide(currentIndex+1);
           }
    });
    

});

