#import "env.js";

if (!App.isOniPad()) {
	throw new Error("Test suite only works on iPad");
}

test("Removing and replacing search term in landscape", function() {
	App.rotateLandscape();
	var s = SearchTermScreen;
	s.removeTerm("coffee");
	s.assertNoTerm("coffee");
	s.addTerm("coffee");
	s.assertTerm(0, "coffee");
});