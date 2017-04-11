
var cornellPath = "./cornellResponses/";
var twitterPath = "./twitterResponses/";
var cornellTwiiterPath = "./cornellTwitterResponses/";

function loadText(path, iterationNumber, targetDiv) {
	var fileName = "corrected_dialogue_a_" + iterationNumber;
	$.get(path + fileName, function(data) {
	    var lines = data.split("\n");
	    $.each(lines, function(n, elem) {
	    	if (n > 1) {
	    		if (n%2 == 0) {
	    			$('#' + targetDiv).append('<p class="question">' + elem + '</p>');
	        	} else {
	        		$('#' + targetDiv).append('<p class="answer"> -> ' + elem + '</p>');
	        	}
	    	} else if (n == 1) {
	    		$('#' + targetDiv + "Perplexity").empty();
	    		$('#' + targetDiv + "Perplexity").append('<p class="properties">' + elem + '</p>');
	    	}
	    });
    });
}

function init() {
	$( function() {
    	$( "#selectable" ).selectable();
 	 } ); 
}

function loadDialogues(checkptNumber) {
	
	$("#cornell").empty();
	$("#twitter").empty();
	$("#cornellTwitter").empty();

	loadText(cornellPath, checkptNumber, "cornell");
	loadText(twitterPath, checkptNumber, "twitter");
	loadText(cornellTwiiterPath, checkptNumber, "cornellTwitter");
}
