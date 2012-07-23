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
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jQuery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var $this;
    
    var methods = {
        init : function( options ) {
            return this.each(function(){
                var $this = $(this),
                    data = $this.data('initialized');
         
                if ( ! data ) {
                    $this = $(this);
                    $this.data('initialized', true);

                    var ss = {
                        offset: 0,
                        placeHolder: document.createElement("div"),
                        isStuck: false,
                        offsetTop: 0,
                        id: Math.floor(Math.random() * 11111111)
                    };

                    $.extend(ss, options);

                    ss.offsetTop = $this.offset().top - ss.offset;
                    ss.placeHolder.id = ss.id + '-place-holder';
                    $this.before(ss.placeHolder);

                    $(document).on('scroll.stickyspy', function() {
                        var scrollTop = $(document).scrollTop();
                        if(!ss.isStuck && scrollTop > ss.offsetTop) {
                            var placeHolderHeight = $this.outerHeight(true);
                            $this.addClass('sticky');
                            $(ss.placeHolder).height(placeHolderHeight);
                            ss.isStuck = true;
                        } else if (ss.isStuck && scrollTop <= ss.offsetTop) {
                            $this.removeClass('sticky');
                            $(ss.placeHolder).height(0);
                            ss.isStuck = false;
                        }
                    });
                }
            });
        }
    };

    $.fn.stickySpy = function( method ) {

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.plugin' );
        }

    };
}));