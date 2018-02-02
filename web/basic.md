# jquery example

[TOC]

## method

1. seletor
   1. css same
   2. children, parent, siblings
   3. next(), nextAll(), prev(), prevAll()
2. eq() | index()
3. color()
4. animate()
5. callBack function(){}
6. show() | hide() | toggle()
7. addClass() | removeClass()
8. make/delete/import html
   1. wrap() 
   2. after(), before()
   3. html()
   4. val(), text(), attr()
   5. empty(), removeAttr(), remove()
9. hasClass() | is()
10. event()
  1. click, dblclick
  2. focus, blur
  3. keydown, keyup
  4. mousewhell | DOMMouseScroll
  5. scroll
  6. resize
11. width() | height()
    1. innerWidth() , outerWidth(), outerWidth(true)
    2. innerHeight() , outerHeight(), outerHeight(true)
12. append() | prepend()
    1. appendTo()
    2. prependTo()
13. scrollTop() | offset().top | offset().left
14. parseInt() | parseFloat()
15. setInterval() | clearInterval() | setTimeout() 
16. play(), pause(), load()
17. pageX() | pageY()
18. setInterval() | clearInterval()


---

## example

1. (o) [ show | hide | toggle 기초기능](https://xidoweb.github.io/webTest/web/jquery_test/html/a_show_hide_toggle/js_01_showHide.html)

2. accordion 세로형기능

   1. (o) [accordion menu - 세로형1(slideDown | slideUp)](https://xidoweb.github.io/webTest/web/jquery_test/html/b_accordion/js_02_accordionV.html)
   2. (o) [animate callback 기초기능](https://xidoweb.github.io/webTest/web/jquery_test/html/b_accordion/js_03_animateCallback)
   3. (o) [accordion menu - 세로형2(animate)](https://xidoweb.github.io/webTest/web/jquery_test/html/b_accordion/js_04_accordionV.html)

3. accordion 가로형기능

   1. (o) [accordion menu - 가로형(width)](https://xidoweb.github.io/webTest/web/jquery_ex/html/b_accordion/js_05_accordionH1.html)
   2. (o) [accordion menu - 가로형2(position)](https://xidoweb.github.io/webTest/web/jquery_ex/html/b_accordion/js_05_accordionH2.html)
   3. (o) [accordion menu -  가로형3(applications)](https://xidoweb.github.io/webTest/web/jquery_ex/html/b_accordion/js_05_accordionH3.html)

4. menu

   1. (o) [tab menu_1(accordion_menu1응용)](https://xidoweb.github.io/webTest/web/jquery_ex/html/c_menu/js_05_tabMenu_01.html)
   2. (o) [eq | index 기초기능](https://xidoweb.github.io/webTest/web/jquery_test/html/c_menu/js_07_indexEq_01.html) 
   3. (o) [tab menu](https://xidoweb.github.io/webTest/web/jquery_test/html/c_menu/js_06_tabMenu_02.html)
   4. tab_menu(이중 탭메뉴)
   5. (o) [drop down menu_1(1depth)](https://xidoweb.github.io/webTest/web/jquery_test/html/c_menu/js_08_menu_depth_01.html)
   6. (o) [drop down menu_2(all)](https://xidoweb.github.io/webTest/web/jquery_test/html/c_menu/js_08_menu_depth_02.html)
   7. (o) [button menu_1(click view, slideDown)](https://xidoweb.github.io/webTest/web/jquery_test/html/c_menu/js_08_menu_depth_03.html)
   8. drop down menu_3(2depth~)
   9. (x) [side menu](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_08_slide_button.html)
   10. button menu_2(button animation,before|after)
   11. button menu_3(hover menu 물결무늬처리,position)
   12. button menu_4(클릭위치 파장처리-pageX,pageY)
   13. (x) more view button 더보기 사용하기

5. 선택, 해당값 처리기능

   1. (o) [one page scroll](https://xidoweb.github.io/webTest/web/jquery_test/html/f_scroll_page/js_08_onepageScroll_01.html)
   2. (x) [im3age-gallery_1(data속성사용하기)](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_09_gallery_01.html)
   3. (x) [image-gallery_2(json속성사용하기)](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_09_gallery_02.html)

6. import

   1. json | text 기초 이해하기(외부문서처리하기)
   2. (x) [이미지갤러리_3(모달윈도우)](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_13_modal_01.html)
   3. multi player
   4. 상품내용보기

7. 광고배너

   1. (o) [slide banner_1 - &lt; , &gt; button](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_10_slideBanner_01.html)
   2. (x) [slide banner_2 - &lt; , &gt; button 겹친 이미지 banner]( )
   3. (x) [slide banner_3 - indicator](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_19_slideBanner_02.html)
   4. (x) [slide banner_4 - &lt;, &gt;, indicator](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_19_slideBanner_03.html)
   5. slide banner_4 - json이용하여 만들기

8. scroll page

   1. (o) [offset(), scrollTop() 기초이해](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_14-1_scrollTop_offset.html)
   2. (o) [scroll fix, resize](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_15_scrollFix_header.html)
   3. [parallax scroll]
   4. (x) [randing page](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_17_randing_01.html)
   5. video (width:100%, height:100%)
   6. (x) [mouse wheel 기초이해하기 ](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_16_mousewheel_01.html)
   7. (x) [mouse wheel 이용한 휠페이지V](https://xidoweb.github.io/webTest/web/jquery_ex/jquery_16_mousewheel_02.html)
   8. random 숫자만들기
   9. counter view

9. responsive web

   ​