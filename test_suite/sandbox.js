#import "env.js"

test('Refreshing map results over the ocean should return no results', function() {
	SearchTermScreen.tapTerm('coffee');
	delay(4) // adjust to give map time for first animation
	ResultsMapScreen.moveMapFarToTheLeft();
	ResultsScreen.tapRefreshButton();
	AlertScreen.assertWithTitle("Not found");
	AlertScreen.confirm();
	ResultsMapScreen.assertNoPins();
	ResultsScreen.goBack();
});

/*
var map = window.mapViews()[0];

var rect = map.rect();
var mapCenter = {
    x: rect.size.width/2 + rect.origin.x,
    y: rect.size.height/2 + rect.origin.y
};
var startPoint = {
    x: mapCenter.x - 60,
    y: mapCenter.y
};
var endPoint = {
    x: mapCenter.x,
    y: mapCenter.y
};
target.pinchCloseFromToForDuration(startPoint, endPoint, 1);

var options = {
    startOffset: {x:0.2, y:0.5},
    endOffset:   {x:0.9, y:0.4}
};
map.flickInsideWithOptions(options);

target.frontMostApp().navigationBar().rightButton().tap();
*/
