
var cornell2Path = "./2layer-cornell/"
var twitterPath = "./twitter-all/"
var pos2Path = "./2layer-pos/"
var twitterPos2Path = "./twitter-pos/"
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
	$("#pos-cornell-2").empty();
	$("#pos-twitter-2").empty();
	$("#neg-cornell-2").empty();
	$("#neg-cornell-3").empty();
	$("#cornell").empty();
	$("#twitter").empty();

	loadText(cornell2Path, checkptNumber, "cornell");
	loadText(twitterPath, checkptNumber, "twitter");
	loadText(pos2Path, checkptNumber, "pos-cornell-2");
	loadText(twitterPos2Path, checkptNumber, "pos-twitter-2");
	loadText(neg2Path, checkptNumber, "neg-cornell-2");
	loadText(neg3Path, checkptNumber, "neg-cornell-3");
}