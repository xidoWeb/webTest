// js_side_menu_01.css
(function($) {
  var sideBox    = $('#sideBox');
  var sideBtn    = $('.side_btn');
  var sideBtnIn  = sideBtn.find('button');
  var sideText   = sideBtnIn.text();
  var topBtn     = sideBox.find('.top');
  var topBtnText = topBtn.find('a').text();

  sideBtn.on('click',['button'], function(e) {
    e.preventDefault();
    // sideBox.toggleClass('active');
    var sideActive = sideBox.hasClass('active');
    if(!sideActive){
      sideBox.addClass('active');
      sideBtnIn.text('닫기');
      topBtn.addClass('active');
      topBtn.find('a').text('++');
    }else{
      sideBox.removeClass('active');
      sideBtnIn.text(sideText);
      topBtn.removeClass('active');
      topBtn.find('a').text(topBtnText);
    }

  });

})(this.jQuery);