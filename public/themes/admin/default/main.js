$(function (){
	// Auto Size
	var autoSize = function(size){
		var height = $(window).height()-90;
		var DisplayTop = $("#DisplayTop").text();
		if(DisplayTop == 'hide'){
			$("#top").hide();
		}else{
			$("#top").show();
		}
		if(size){height = height+size;}else if(DisplayTop == 'hide'){height = height+50;}
		// Change Height
		$(".ct_left,.ct_right").height(height);
		$(".web_iframe").height(height-5);
	}
	autoSize();
	$(window).resize(function(){autoSize();});
	// Menus
	$('.ct_left .left_title').click(function (){
		// alert($(this).next('ul').html());
		var p = $(this).next('ul');
		if(p.is(':hidden')){
			p.slideDown('fast');
		}else{
			p.slideUp('fast');
		}
	});
	// All or Not all
	$('#checkboxY').click(function () {
		$(this).hide();
		$(this).parent().parent().parent().parent().find("input:checkbox").prop("checked", true);
		$('#checkboxN').show().click(function () {
			$(this).hide();
			$('#checkboxY').show();
			$(this).parent().parent().parent().parent().find("input:checkbox").prop("checked", false);
			return false;
		});
		return false;
	});
});