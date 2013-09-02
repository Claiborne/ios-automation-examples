"use strict";

var ResultsListScreen = {
    assertResult: function(name) {
        log("Checking for list for result", name);
        var tableView = this.window().tableViews()[0];
        var cell = tableView.cells()[name];
        assert(cell.isValid(), "Result not found!");
    }
};

ResultsListScreen.__proto__ = Screen;
