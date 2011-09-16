var parseDungeonForm = function(data){
	
};

$(document).ready(function(){
	
	var adform = $('#adddungeonform'),
		aderrorslink = $('#aderrorslink');
		
	adform.validate({
		invalidHandler: function(form, validator){
			aderrorslink.click();
			var html = '';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
			};
			$("#addungeonerrors ul").html(html);
		},
		submitHandler: function(){
			var data = adform.serializeArray();
			parseDungeonForm(data);
		}
	});

});