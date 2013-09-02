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

test("Searching for 'coffee' in downtown San Francisco", function() {
    SearchTermScreen.tapTerm("coffee");
    ResultsScreen.showList();
    ResultsListScreen.assertResult("Starbucks Coffee, 0.4 mi");
    ResultsScreen.goBack();
});
