(function($) {
    $.fn.extend({
        leanModal: function(options) {
            var defaults = {
                top: 0,
                overlay: 0.5,
                closeButton: '.modal-close'
            };
            options = $.extend(defaults, options);
            return this.each(function() {
                var o = options;
                $(this).click(function(e) {
                    var modal_id = $(this).attr("href");
                    $(o.closeButton).click(function() {
                        close_modal(modal_id)
                    });
                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();


                     $(modal_id)
                     .css({
                        "display": "block",
                        "z-index": 11000,
                        "top": o.top + "px"
                    })
                    .addClass('animated flipInX')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                      $(this)
                      .css({'opacity': 1})
                      .removeClass('animated flipInX')
                    });
                    e.preventDefault()
                })
            });

            function close_modal(modal_id) {
                $(modal_id).addClass('animated flipOutX')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                      $(this)
                      .css({"display": "none"})
                      .removeClass('animated flipOutX')
                    });
            }
        }
    })
})(jQuery);