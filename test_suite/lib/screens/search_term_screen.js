"use strict";

var SearchTermScreen = {

    addTerm: function(name) {
        log("Showing alert to add search term");
        UIATarget.onAlert = function() {
            return true;
        };
        this.navigationBar().rightButton().tap();

        this.app().keyboard().typeString(name);
        this.app().alert().defaultButton().tap();
    },

    // ...

    removeTerm: function(name) {
        log("Removing search term", name);
        var editButton = this.navigationBar().leftButton();
        editButton.tap();

        var cell = this.tableView().cells()[name];

        var deleteSwitch = cell.switches()[0];
        deleteSwitch.tap();

        var deleteButton = cell.buttons()[0];
        deleteButton.tap();

        editButton.tap();
    },

    // ...

    assertTerm: function(index, name) {
        log("Checking for", name, "at index", index);
        var cell = this.tableView().cells()[index];
        assertEqual(cell.name(), name);
    },

    // ...

    assertNoTerm: function(name) {
        log("Assert no term named", name);
        this.target().pushTimeout(0.1); //query below has it's own, long timeout, so overwrite
        var cell = this.tableView().cells()[name];
        this.target().popTimeout();
        assert(!cell.isValid(), "Cell still there");
    },

    // ...

    tapTerm: function(name) {
        this.tableView().cells()[name].tap();
    },
	
	// I like the below better
	navigationBar: function() {
		if (App.isOniPad() && App.isPortrait()) {
			return this.window().popover().navigationBar();
		} else {
			return this.__proto__.navigationBar();
		}
	},
	
	// I like this better than the above
	tableView: function() {
		var root;
		if (App.isOniPad() && App.isPortrait()) {
			root = this.window().popover();
		} else {
			root = this.window();
		}
		return root.tableViews()[0];
	}

};

SearchTermScreen.__proto__ = Screen;
