//@import './utility.js'
//@import './name.json'

var getRandomCPR = function(start, end) {
	randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	var dd = randomDate.getDate();
	var mm = randomDate.getMonth() + 1; //January is 0!
	var yy = randomDate.getFullYear();
	if (yy < 2000) {
		yy = yy-1900;
	}
	else{
		yy = yy-2000;
	}
	if (yy < 10) {
		yy = '0' + yy;
	}
	else{
		yy = '' + yy;
	}
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	var cprDateHeader = dd +'' + mm +''+ yy;
	var cprRandomNumber = '';
	for (var j = 0; j < 4; j++) {
		cprRandomNumber = cprRandomNumber + parseInt(Math.random()*10);
	}
	return cprDateHeader + "-" + cprRandomNumber;
}

function setDanishName(context){
    var selection = context.selection;
	for (var i = 0, l = selection.length; i < l; i++) {
		var layer = selection[i];
		var randomName = data[ Math.floor(Math.random() * data.length) ];

		[layer setStringValue: randomName];
		[layer setName: randomName];
    }
    // tools.checkPluginUpdate();
}

function setPhoneNumber(context){
    var selection = context.selection;

	label = label || 'some data';
	for (var i = 0, l = selection.length; i < l; i++) {
		var layer = selection[i];
		var randomPhone = '+45 ';
		for (var j = 0; j < 8; j++) {
			randomPhone = randomPhone + parseInt(Math.random()*10);
			if(j==3)
				randomPhone = randomPhone + " ";
		}
		if(randomPhone){			
			[layer setStringValue: randomPhone];
			[layer setName: label];
			[layer adjustFrameToFit];
		}		
	}
	// tools.checkPluginUpdate();
}

function setCPRNumber(context){
    var selection = context.selection;

	label = label || 'some data';
	for (var i = 0, l = selection.length; i < l; i++) {
		var layer = selection[i];
		console.log("CPR")
		
		var randomCPR = getRandomCPR(new Date(1900, 0, 1), new Date());
		console.log(randomCPR);
		if(randomCPR){			
			[layer setStringValue: randomCPR];
			[layer setName: label];
			[layer adjustFrameToFit];
		}		
	}
	// tools.checkPluginUpdate();
}
