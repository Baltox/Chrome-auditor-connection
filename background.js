if( localStorage["connectionHistory"] == undefined) {
	connectionHistory = [];
	
} else {
	connectionHistory = JSON.parse(localStorage['connectionHistory']);
	
}

oNow = new Date();

connectionHistory.push( oNow);

localStorage['connectionHistory']=JSON.stringify( connectionHistory);