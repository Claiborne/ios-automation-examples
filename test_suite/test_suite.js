"use strict";

#import "env.js";

test("Removing the 'coffee' search term", function() {
    var s = SearchTermScreen;
    s.removeTerm("coffee");
    s.assertNoTerm("coffee");
});

test("Putting the 'coffee' term back in the list", function() {
    var s = SearchTermScreen;
    s.addTerm('coffee');
    s.assertTerm(0, 'coffee');
});

test("Searching for 'coffee' near by me", function() {
    SearchTermScreen.tapTerm("coffee");
    ResultsScreen.showList();
    ResultsListScreen.assertResult("Starbucks Coffee, 0.4 mi");
    ResultsScreen.goBack();
	
});

test("Searching for 'coffee' on the map near by me", function() {
	SearchTermScreen.tapTerm('coffee');
	ResultsMapScreen.assertPinNamed("POI: Starbucks Coffee");
	ResultsScreen.goBack();
});

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
