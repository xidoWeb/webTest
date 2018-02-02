// js_08_onepageScroll_01.js

(function($) {
/* onepage scroll
  1. html문서에서 미리 indicator기능을 생성하여 스크롤처리
  2. 동일한 class이름을 사용할경우 쉽게 data를 가져와서 '.indicator'기능을 생성
*/

// 2. html문서에서 동일한 class이름을 사용할경우 쉽게 data를 가져와서 '.indicator'기능을 생성
 var page = $('.page');
 // console.log(page.length);
 var headBox = $('#headBox');
  headBox.append('<div class="indicator"><ul></ul></div>');
 var indi    = $('.indicator');
 var indiUl =  indi.children('ul');

 // li를 .page만큼 생성  
 // indicator 생성시, 내부에 h1 또는 h2가 존재한다는 조건에서 사용
  var i = 0; 
  var pageAttr, text;
 for(; i < page.length; i++){

  // page의 내부의 id값을 변수로 저장
  pageAttr = page.eq(i).attr('id');

  // page자식중 제목요소가 h1 이나 h2를 구분하여 처리
  if(page.eq(i).children('h1').length > 0 ){
    text = page.eq(i).find('h1').text();
  }else if(page.eq(i).children('h2').length > 0 ){
    text = page.eq(i).find('h2').text();
  }else{
    text = page.eq(i).find('h3').text();
  }

  indiUl.append('<li><a href="#' + pageAttr + '"><span>' + text + '</span></a></li>');
  // console.log(text);
 }


// 1. '.indicator' html문서를 만들어 놓았을경우 처리할 수 있는 기능
  // var indi    = $('.indicator');
  var indiLi  = indi.find('li');
  var timed  = 800;
  
  // console.log(navTop);
  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var _thisAttr = $(this).find('a').attr('href');
    // console.log(_thisAttr);
    var offsetTest = $(_thisAttr).offset().top;
    // console.log(offsetTest);
    $('html, body').stop().animate({scrollTop:offsetTest}, timed, 'easeOutBack');
  });
})(this.jQuery);