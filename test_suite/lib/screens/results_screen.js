"use strict";

var ResultsScreen = {
    goBack: function() {
        var backButton = this.navigationBar().leftButton();
        backButton.tap();
    },

    // ...

    showList: function() {
        log("Switching to the list of results");
        var toggle = this.toolbar().segmentedControls()[0];
        toggle.buttons()['List'].tap();
    },
	
	tapRefreshButton: function() {
		this.navigationBar().rightButton().tap();
	}
};

ResultsScreen.__proto__ = Screen;
