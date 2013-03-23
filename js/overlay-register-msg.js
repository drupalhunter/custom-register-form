(function($) {
    $('#custom-register-msg-display').ready(function(){
        $("#custom-register-msg-display").overlay({
		position: 'fixed',
		background: '#ffffff',
		opacity:0.6,
		zIndex:99,
		url: '',
		showAfter: 0,
		hideAfter: 0,
		close: true,
		escClose: true,
		remove: false,
		replaceWith: '',
		onTrigger : function(){},
		onLoad : function(){},
		onClose : function(){}
        });
    });
})(jQuery);
