var ua = navigator.userAgent.toLowerCase();
var ver = navigator.appVersion.toLowerCase();

// IE(11以外)
var isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
// IE6
var isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1);
// IE7
var isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1);
// IE8
var isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1);
// IE9
var isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1);
// IE10
var isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1);
// IE11
var isIE11 = (ua.indexOf('trident/7') > -1);
// IE
var isIE = isMSIE || isIE11;
// Edge
var isEdge = (ua.indexOf('edge') > -1);
 
// Google Chrome
var isChrome = (ua.indexOf('chrome') > -1) && (ua.indexOf('edge') == -1);
// Firefox
var isFirefox = (ua.indexOf('firefox') > -1);
// Safari
var isSafari = (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1);
// Opera
var isOpera = (ua.indexOf('opera') > -1);
 
$(function() {
  if (isOpera) {
    $("body").addClass("js_isOpera");
  } else if (isIE) {
    $("body").addClass("js_isIe");
  } else if (isChrome) {
    $("body").addClass("js_isChrome");
  } else if (isSafari) {
    $("body").addClass("js_isSafari");
  } else if (isEdge) {
    $("body").addClass("js_isEdge");
  } else if (isFirefox) {
    $("body").addClass("js_isFirefox");
  } else {
    return false;
  }
});
 
  //デバイス判定
  var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());
 
$(function() {
  if(_ua.Mobile){
  //この中のコードはスマホにのみ適用
  　$('body').addClass("js_isMobile");
  }else if(_ua.Tablet){
  //この中のコードはタブレットにのみ適用
  　$('body').addClass("js_isTablet");
  }else{
  //この中のコードはスマホ・タブレット以外に適用
  　$('body').addClass("js_isPc");
  }
});

 
if(navigator.platform.indexOf("Win") != -1){
  $('body').addClass('js_isWin');
}else{
  $('body').addClass('js_isNotWin');
}


$(function() {
  var ua = navigator.userAgent;
if( ua.indexOf('iPhone') > 0 ) {
$('body').addClass('iPhone');
} else if( ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 ) {
$('body').addClass('Android');
} else if( ua.indexOf('iPad') > 0 ) {
$('body').addClass('iPad');
} 
});