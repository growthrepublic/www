/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/
(function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this),n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n(),e(window).on("resize",n)})}})(jQuery),$(".header__introduction__body").fitText(1.2,{minFontSize:"16px",maxFontSize:"48px"}),$(function(){$("a[href*=#]").each(function(){$(this).attr("href").indexOf("#")===0&&$(this).on("click",function(e){e.preventDefault();var t=$($(this).attr("href")).offset().top;$("html, body").animate({scrollTop:t},700)})})});