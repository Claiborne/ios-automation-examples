var AlertScreen = {
	alert: function() {
		return this.app().alert();
	},
	
	assertWithTitle: function(expectedTitle) {
		log("Checking for an alert with title", expectedTitle);
		assert(this.alert().isValid(), 'Alert did not show');
		var title = this.alert().staticTexts()[0].value();
		assertEqual(title, expectedTitle);
	},
	
	confirm: function() {
		this.alert().defaultButton().tap();
	},
	
	cancel: function() {
		this.alert().cancelButton().tap();
	}
};

AlertScreen.__proto__ = Screen;