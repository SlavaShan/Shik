

$(document).ready(function(){


// fixed-menu	

	$(window).scroll(function() {
	var top = $(window).scrollTop();

	if (top > 500) {
		$(".header-content").addClass("menu-fixed");
	} else {
		$(".header-content").removeClass("menu-fixed");
	}
	}); 


// header-content-nav change active button and scroll page to anchor

$('.header-content-nav').on('click', '.top-link', function(e){
	$('.header-content-nav').find('li').filter('.acting').removeClass('acting');
	$(this).parent('li').addClass('acting');
	$("html, body").animate({
		scrollTop: $($(this).attr("href")).offset().top-125 + "px"
	}, {
		duration: 500
	});
}); 


// top slider

	$('.carousel').carousel();


// our-work slider

	$('.bxslider-sec').bxSlider({
	    nextSelector: '#slider-next',
	 	prevSelector: '#slider-prev',
		controls: true,
		pager: false,
	    prevText: '<img src="i/our-works-left-arrow-enother.png" height="45" width="45"/>',
	    nextText: '<img src="i/our-works-right-arrow-enother.png" height="45" width="45"/>',
	    infiniteLoop: false
	});


// last news slider	

	$('.bxslider-thrd').bxSlider({
	    nextSelector: '#sslider-next',
	 	prevSelector: '#sslider-prev',
		controls: true,
		pager: false,
	    prevText: '<img src="i/last-news-left-arrow.png" height="25" width="25"/>',
	    nextText: '<img src="i/last-news-right-arrow.png" height="25" width="25"/>',
	    infiniteLoop: false
	});


// reviews slider
	
	$('.bxslider-fourth').bxSlider({
	    nextSelector: '#rslider-next',
	 	prevSelector: '#rslider-prev',
		controls: true,
		pager: false,
	    prevText: '<img src="i/last-news-left-arrow.png" height="25" width="25"/>',
	    nextText: '<img src="i/last-news-right-arrow.png" height="25" width="25"/>',
	    infiniteLoop: false
	});
	

// fancybox
	
	$(".fancybox").fancybox();


// popup-form title

$('#order-call-link').on('click', function(){
	setPopupFormTitles({
	form : '#order-call',
	title : 'Заказать звонок',
	submitBtnText : 'Заказать обратный звонок'
	});
});

$('#order-call-link-rep-disc').on('click', function(){
	setPopupFormTitles({
	form : '#order-call',
	title : 'Ремонт со скидкой 10%',
	submitBtnText : 'Заказать'
	});
});

$('#order-call-link-rep-pay').on('click', function(){
	setPopupFormTitles({
	form : '#order-call',
	title : 'Ремонт в рассрочку',
	submitBtnText : 'Заказать'
	});
});

$('#order-call-link-con-disc').on('click', function(){
	setPopupFormTitles({
	form : '#order-call',
	title : 'Строительство со скидкой 10%',
	submitBtnText : 'Заказать'
	});
});

$('#order-call-link-back-pay').on('click', function(){
	setPopupFormTitles({
	form : '#order-call',
	title : 'Строительство в рассрочку',
	submitBtnText : 'Заказать'
	});
});

function setPopupFormTitles(options){
	var form = $(options.form);
	form.find('h3').html(options.title);
	form.find('.btn').html(options.submitBtnText);
	form.find('input[name="act"]').val(options.title);
	form.find('.orderResultMessage ').remove();
} 


// form

	$('#form-name').focus(function() {
	$(this).attr('value','');
	$(this).css('color','black');
	});

	$('#form-name').blur(function() {
	$(this).attr('value','Ваше имя');
	$(this).css('color','black');
	});

	$('#form-phone').focus(function() {
	$(this).attr('value','');
	$(this).css('color','black');
	});

	$('#form-phone').blur(function() {
	$(this).attr('value','Ваш телефон');
	$(this).css('color','black');
	});

	$('#form-comment').focus(function() {
	$(this).attr('placeholder','');
	$(this).css('color','black');
	});

	$('#form-comment').blur(function() {
	$(this).attr('placeholder','Комментарий...');
	$(this).css('color','black');
	});


if ($(window).width() > 1024){
new WOW().init();
} 





});

