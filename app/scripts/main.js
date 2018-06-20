$('[data-fancybox]').fancybox({ 
	buttons : [
	'close']
	});

$('.info-4__row__item').on('click',function(){   
$('button.fancybox-button.fancybox-button--close').remove();
$('.fancybox-navigation').remove(); 
			$('.fancybox-content').append('<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="Close"></path></svg></button>');
			$('.fancybox-content').append('<div class="fancybox-navigation"><a data-fancybox-prev="" class="fancybox-button fancybox-button--arrow_left" title="Previous" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a><a data-fancybox-next="" class="fancybox-button fancybox-button--arrow_right disabled" title="Next" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a></div>'); 
			$('.fancybox-content').each(function(){
				console.log($(this).length);
			})
function fancyClick(){
$('.fancybox-content').on('click',function(){
	setTimeout(function(){
			$('.fancybox-slide.fancybox-slide--image .fancybox-content').append('<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="Close"></path></svg></button>');
			$('.fancybox-slide.fancybox-slide--image .fancybox-content').append('<div class="fancybox-navigation"><a data-fancybox-prev="" class="fancybox-button fancybox-button--arrow_left" title="Previous" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a><a data-fancybox-next="" class="fancybox-button fancybox-button--arrow_right disabled" title="Next" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a></div>'); 
	},500);
    fancyClick();
})
}
    fancyClick();
});
$(document).ready(function(){
	setTimeout(function(){ 
$('button.fancybox-button.fancybox-button--close').remove();
$('.fancybox-navigation').remove(); 
			$('.fancybox-slide.fancybox-slide--image .fancybox-content').append('<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="Close"></path></svg></button>');
			$('.fancybox-slide.fancybox-slide--image .fancybox-content').append('<div class="fancybox-navigation"><a data-fancybox-prev="" class="fancybox-button fancybox-button--arrow_left" title="Previous" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a><a data-fancybox-next="" class="fancybox-button fancybox-button--arrow_right disabled" title="Next" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a></div>');


		
	},300); 
	$('.fancybox-slide.fancybox-slide--image .fancybox-content').on('click',function(){
		console.log('1');
	})
})