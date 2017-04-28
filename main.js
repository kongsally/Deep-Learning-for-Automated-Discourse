
var cornell2Path = "./2layer-cornell/"
var cornell3Path = "./3layer-cornell/"
var pos2Path = "./2layer-pos/"
var pos3Path = "./3layer-pos/"
var neg2Path = "./2layer-neg/"
var neg3Path = "./3layer-neg/"

function loadText(path, iterationNumber, targetDiv) {
	var fileName = "dialogue_a_" + iterationNumber;
	$.get(path + fileName).
		done(function(data) {
		  $('#' + targetDiv + "Wrapper").show();
	    var lines = data.split("\n");
	    $.each(lines, function(n, elem) {
	    	if (n > 0) {
	    		if (n%2 == 1) {
	    			$('#' + targetDiv).append('<p class="question">' + elem + '</p>');
	        	} else {
	        		$('#' + targetDiv).append('<p class="answer"> -> ' + elem + '</p>');
	        	}
	    	} 
	    });
    }).fail(function(data) {
    	$('#' + targetDiv + "Wrapper").hide();
    });
}

function init() {
	$(function() {
    	$( "#selectable" ).selectable();
 	}); 
}

function loadDialogues(checkptNumber) {
	$("#pos2").empty();
	$("#pos3").empty();
	$("#neg2").empty();
	$("#neg3").empty();
	$("#cornell2").empty();
	$("#cornell3").empty();

	loadText(cornell2Path, checkptNumber, "cornell2");
	loadText(cornell3Path, checkptNumber, "cornell3");
	loadText(pos2Path, checkptNumber, "pos2");
	loadText(pos3Path, checkptNumber, "pos3");
	loadText(neg2Path, checkptNumber, "neg2");
	loadText(neg3Path, checkptNumber, "neg3");
}