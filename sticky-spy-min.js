// Uses AMD or browser globals to create a jQuery plugin.
/**
 * Sticky Spy - jQuery Plugin
 *
 * Version: 0.1.0 (7/22/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2011 User - http://github.com/adamwdraper
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */(function(e){typeof define=="function"&&define.amd?define(["jQuery"],e):e(jQuery)})(function(e){var t,n={init:function(t){return this.each(function(){var n=e(this),r=n.data("initialized");if(!r){n=e(this);n.data("initialized",!0);var i={offset:0,placeHolder:document.createElement("div"),isStuck:!1,offsetTop:0,id:Math.floor(Math.random()*11111111)};e.extend(i,t);i.offsetTop=n.offset().top-i.offset;i.placeHolder.id=i.id+"-place-holder";n.before(i.placeHolder);e(document).on("scroll.stickyspy",function(){var t=e(document).scrollTop();if(!i.isStuck&&t>i.offsetTop){var r=n.outerHeight(!0);n.addClass("sticky");e(i.placeHolder).height(r);i.isStuck=!0}else if(i.isStuck&&t<=i.offsetTop){n.removeClass("sticky");e(i.placeHolder).height(0);i.isStuck=!1}})}})}};e.fn.stickySpy=function(t){if(n[t])return n[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return n.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.plugin")}});