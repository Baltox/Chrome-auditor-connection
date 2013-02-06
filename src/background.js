connectionHistory = getConnectionHistory();

oLastValue = connectionHistory.pop();

oNow = new Date();

if( oLastValue != null) {
	oLastDateCurrent = new Date( oLastValue.date);


}
 

if( oLastValue == null || ( oNow.getTime() - oLastDateCurrent.getTime() > 5000)) {
	

	if( oLastValue != null && oLastValue.type == 'current') {
		oLastValue.type = 'logout';
		connectionHistory.push( oLastValue);
		localStorage['connectionHistory']= JSON.stringify( connectionHistory);

	}

	oNow = new Date();

	connectionHistory.push( { 'date': oNow, 'type' : 'login'});

	localStorage['connectionHistory']= JSON.stringify( connectionHistory);
}


setInterval( function() {
			connectionHistory = getConnectionHistory();
			
			oLastValue = connectionHistory.pop();
			
			oNow = new Date();

			if( oLastValue.type == 'current') {
				oLastValue.date = oNow;
				connectionHistory.push( oLastValue);

			} else {
				connectionHistory.push( oLastValue);

				connectionHistory.push( { 'date' : oNow, 'type' : 'current'});

			}

			localStorage['connectionHistory']= JSON.stringify( connectionHistory);
		}
		,1000
);


function getConnectionHistory() {
	if( localStorage["connectionHistory"] == undefined) {
	connectionHistory = [];
	
	} else {
		connectionHistory = JSON.parse(localStorage['connectionHistory']);
	
	}

	return connectionHistory;
}

