$(document).ready(function(){

	var getoutput = $("#state");
	var getslider = $("#slide");

		getslider.slider({
			range: true,
			min: 10,
			max: 100,
			values:[20,40],
			slide: function(event, ui){
				getoutput.html(ui.values[0]+'-'+ui.values['1']+'Taka');
				$('#maxValue').val(ui.values[0]);
				$('#minValue').val(ui.values[1]);
			},

	});

		getoutput.html(getslider.slider('values',0)+'-'+getslider.slider('values',1)+' Taka');
		$('#maxValue').val(getslider.slider('values',0));
		$('#minValue').val(getslider.slider('values',1));
});