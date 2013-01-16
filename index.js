
oConnections = JSON.parse(localStorage['connectionHistory']);

oConnections.forEach(function(y) {
						oTable = $( '#table tbody');
						oTable.html( oTable.html() + "<tr>" + y.date + "</tr>");
						
					}); 
