//문서가 다 로드 되면 실행 - 3가지 중 1가지 적용
// * main js 를 head 태그에서 연결한 경우 body요소가 생성 전이기에 js가 실행되지 않음
// * 아래의 3가지 방법 중 하나를 이용하기
//1. window.onload = function() {//js 실행문} => js
//2. $(document).ready(function() {//js 실행문}) => jQuery
//3 html head 안에 script 태그에 defer 속성 추가
//----------------------------------------------------
//window.onload = function() {} => 자바 문법
//$(document).evt(function() {}) => 자바 키워드 document/ '' 사용 X (객체 .매소드)


//popup
$('#popup').draggable();
$('#popup').hide();//문서완성 후 삭제

$('.btn_popup_close').click(function() {
   $('#popup').hide();
})

/*
header language
=> $('.lang_wrap ul').css('display', 'flex');
=>.css('display', 'flex') 여러가지 속성값을 넣을때에는 .css({'display': 'flex'})로 작성한다 {'':''} 사용
=> ex) {'display' : 'flex','display' : 'flex', 'display' : 'flex' } (줄바꿈하기)
*/

// header language
$('.lang_wrap button').click(function() {
/*
   $('.lang_wrap ul').css({
      'display' : 'flex',
      'opacity' : '1'
   });
   $('.lang_wrap button i').css({
      'transform' : 'rotate(180deg)'
   })
   */
   $('.lang_wrap button, .lang_wrap ul').toggleClass('open');
   //'.lang_wrap button' = this (중복일땐 this 사용X)
   /*
   $('.lang_wrap button').toggleClass('open');
   $('.lang_wrap ul').toggleClass('open');
   => 중복으로 주는 경우에는
   => $('태그명 .태그명').toggleClass('open'); 표현
   => $('.lang_wrap button, .lang_wrap ul').toggleClass('open'); 로 표현 가능 */
})

/* 전체 메뉴 */
$('.btn_allmenu_open').click(function() {
   $('.allmenu_popup').css({'display' : 'flex'});
   $('html, body').css({'overflow' : 'hidden'});
})

$('.btn_allmenu_close').click(function() {
   $('.allmenu_popup').hide();
   $('html, body').css({'overflow' : 'auto'});
})

/* header style 추가 */
$('header .btn_search_open').click(function() {
   //헤더에 on 클래스 추가+제거 필요
   $('header').toggleClass('on');
   //.search_popup을 보였다 안보였다
   $('header .search_popup').toggle();
})

/* mouseover/mouseout -> show/hide
-> hover() <= jQuery 이벤트메소드
-> .click(function() {}), .mouseover(function() {} ) 사용되는데,
*** mouseover(function() {}) + mouseout(function() {}) 으로 function이 2번 작용
= .hover(function() {}, function() {} )
-> display:flex; -> display:block;으로 만들어줌

//#gnb dep1의 직접자손 li에게 마우스가 오버 되었을때
//#gnb의 dep2를 보이게함
$('#gnb .dep1>li').mouseover(function() {
   $('#gnb .dep2').show();
})
$('#gnb .dep1>li').mouseout(function() {
   $('#gnb .dep2').hide();
})


// $('#gnb .dep2').hide(2000, callback); -> 2000 = 2초
// method(parameter, parameter, parameter, ....) 요소가 여러개일때 , 표시
// hover() <= jQuery 이벤트메소드

*/

$('#gnb .dep1>li').hover(function() {
   //over
   //#gnb .dep1>li =this 의 자손 dep2
   // $(this).children('.dep2_wrap').stop().slideDown();
   $(this).children('.dep2_wrap').stop().show();
   $('header').addClass('on');
},function() {
   //out
   $('#gnb .dep2_wrap').stop().slideUp(300);
   $('header').removeClass('on');
})

/*footer
1.family_wrap>button 버튼을 클릭하면 (클릭=>이벤트 요소)
2.패밀리 리스트(.family_wrap>ul)가 보였다 안보였다 (toggle) / 500=5s
3.위쪽으로 늘었다가 줄어들었다 - 애니메이션 animate()
4.보이는 상황(true)/ 안보이는 상황(false)
   -> (조건문) true 이면 false , fasle면 true
   -> if() {}
   -> if(s == false) {s = true;} : s는 false와 같다면 true로 출력된다.
      :(s가 false와 동일한지 물어보는 내용)
   -> else {s = false;} 그 밖에 행동을 했을때에~
      :(s가 true와 동일한지 물어보는 내용)

** == (동일하다)
** let s = 20; => 20이라는 숫자를 s라는 상자에 넣어둬라는 의미
   -> s = (s + 1); (s + 1) 값을 s 상자에 넣어라

**css({prop : val, prop : val})
*/

let s = false;
$('.family_wrap>button').click(function() {
   // $('.family_wrap>ul').toggle(500)
   if(s == false) {
      $('.family_wrap>ul').animate({'height': '11.5em'});
      //$('.family_wrap>ul').show()
      s = true;
   }
   else {
      $('.family_wrap>ul').animate({'height': '0'});
      //$('.family_wrap>ul').hide()
      s = false;
   }
   console.log(s)
})

/* $('.family_wrap>button').click(function() {
   $('.family_wrap>ul').toggle(500)
})
  */

const mainSwiper = new Swiper('.main_swiper', {
   autoplay: true,
   loop: true,
   direction: 'horizontal',
   navigation:{
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
   },
   autoplay: {
      delay: 3000,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
})

$('.main_visual .swiper-auto-controls .auto-play').click(function() {
   $(this).hide();
   $('.main_visual .swiper-auto-controls .auto-stop').show();
   mainSwiper.autoplay.start();
})

$('.main_visual .swiper-auto-controls .auto-stop').click(function() {
   $(this).hide();
   $('.main_visual .swiper-auto-controls .auto-play').show();
   mainSwiper.autoplay.stop();
})