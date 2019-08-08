const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')
const theData = require('./name.json')

export function onStartup () {
  DataSupplier.registerDataSupplier('public.text', 'Danish Names', 'SupplyDanishNames');
  DataSupplier.registerDataSupplier('public.text', 'Phone Numbers', 'SupplyPhoneNumbers');
  DataSupplier.registerDataSupplier('public.text', 'CPR numbers', 'SupplyCPRnumbers');
}

export function onShutdown () {
  DataSupplier.deregisterDataSuppliers();
}

export function onSupplyDanishNames (context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  
  // var theData = ['Lucy', 'Johnnie', 'Petie', 'Jamie', 'Tina', 'Gillie', 'Tania', 'Peta', 'Rudolpho', 'Jellie', 'Ricki', 'Lori', 'Jorgi', 'Marki'];
  // var data = NSData.dataWithContentsOfURL('./name.json');
  // var theData = NSJSONSerialization.JSONObjectWithData_options_error(data, 0, nil);
		
  var dynamicData = theData.slice(Math.floor(Math.random() * theData.length));
  dynamicData.push.apply(dynamicData, theData);
  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, theData);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;
  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;  
  } 
  // DataSupplier.supplyData(dataKey, dynamicData);  
}

export function onSupplyPhoneNumbers (context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dataIndex = 0;
  while (dataIndex < dataCount) {
    var randomPhone = '+45 ';
		for (var j = 0; j < 8; j++) {
			randomPhone = randomPhone + parseInt(Math.random()*10);
			if(j==3)
				randomPhone = randomPhone + " ";
		}
    DataSupplier.supplyDataAtIndex(dataKey, randomPhone, dataIndex);
    dataIndex++;  
  } 
  // DataSupplier.supplyData(dataKey, dynamicData);  
}

export function onSupplyCPRNumbers (context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dataIndex = 0;
  while (dataIndex < dataCount) {
    var randomCPR = getRandomCPR(new Date(1900, 0, 1), new Date());
		
    DataSupplier.supplyDataAtIndex(dataKey, randomCPR, dataIndex);
    dataIndex++;  
  } 
  // DataSupplier.supplyData(dataKey, dynamicData);  
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var getRandomCPR = function(start, end) {
	var randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
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