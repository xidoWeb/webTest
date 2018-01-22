// js_01_showHide.js
(function($) {

  // show(), hide(), toggle()
  // fadeIn(), fadeOut(), fadeToggle()
  // slideDown(), slideUp(), slideToggle()
  // addClass(), removerClass(), toggleClass()

  // 선택자.on('click', 콜백함수(인수){ 인자.preventDefault(); });

// 1.
// 선택자 가져오기
 var btn = $('#navigation').find('li');
 var par = $('p'); 
 var timed = 500;
 // http://easings.net/ko

 var easing =[
      'easeInSine','easeOutSine','easeInOutSine','easeInQuad',
      'easeOutQuad','easeInOutQuad','easeInCubic','easeOutCubic',
      'easeInOutCubic','easeInQuart','easeOutQuart','easeInOutQuart',
      'easeInQuint','easeOutQuint','easeInOutQuint','easeInExpo',
      'easeOutExpo','easeInOutExpo','easeInCirc','easeOutCirc',
      'easeInOutCirc','easeInBack','easeOutBack','easeInOutBack',
      'easeInElastic','easeOutElastic','easeInOutElastic','easeInBounce',
      'easeOutBounce','easeInOutBounce'];

 var myindex = function(i){
  switch(i){
    case 0:
      par.show(timed);               break;
    case 1:
      par.hide(timed, easing[11]);               break;
    case 2:
      par.toggle(timed, easing[12]);             break;
    case 3:
      par.fadeIn(timed, easing[13]);             break;
    case 4:
      par.fadeOut(timed, easing[14]);            break;
    case 5:
      par.fadeToggle(timed, easing[15]);         break;
    case 6:
      par.slideDown(timed, easing[16]);          break;
    case 7:
      par.slideUp(timed, easing[17]);            break;
    case 8:
      par.slideToggle(timed, easing[18]);        break;
    case 9:
      par.removeAttr('style');
      par.delay(timed).addClass('show');     break;
    case 10:
      par.removeAttr('style');
      par.delay(timed).removeClass('show');  break;
    default:
      par.removeAttr('style');
      par.toggleClass('show');
  }
 };

 // btn.on('click', ['a'], function(e){
 //  e.preventDefault();
 //  // console.log( $(this).index() );
 //  var i =  $(this).index();
 //  myindex(i);
 // });


// $.each([배열], 함수(순서, 값){});
 // $.each(btn, function(index,value){
 //  console.log(index, value);
 // });

 btn.each(function(index){
  $(this).on('click', function(e){
    e.preventDefault();
    console.log(index);
    myindex(index);
  });
 });


})(this.jQuery);