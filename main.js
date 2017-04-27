
var pos2Path = "./2layer-pos/"
var pos3Path = "./3layer-pos/"
var neg2Path = "./2layer-neg/"
var neg3Path = "./3layer-neg/"

function loadText(path, iterationNumber, targetDiv) {
	var fileName = "dialogue_a_" + iterationNumber;
	$.get(path + fileName, function(data) {
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

	loadText(pos2Path, checkptNumber, "pos2");
	loadText(pos3Path, checkptNumber, "pos3");
	loadText(neg2Path, checkptNumber, "neg2");
	loadText(neg3Path, checkptNumber, "neg3");
}