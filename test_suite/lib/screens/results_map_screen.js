"use strict";

var ResultsMapScreen = {
	assertPinNamed: function(name) {
		log('Looking up', name, 'on the map')
		var elements = this.window().elements();
		var pin = elements[name]; //has it's own timeout, so no need to explicitly sleep
		assert(pin.isValid(), "'" + name + "' pin in not found")
	},
	
	mapView: function() {
		return this.window().mapViews()[0];
	},
	
	moveMapFarToTheLeft: function() {
		var rect = this.mapView().rect();
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
		this.target().pinchCloseFromToForDuration(startPoint, endPoint, 3);
		
		var options = {
		    startOffset: {x:0.2, y:0.5},
		    endOffset:   {x:0.9, y:0.4}
		};
		this.mapView().flickInsideWithOptions(options);
		
	},
	
	assertNoPins: function() {
		this.target().pushTimeout(0.1);
		assert(this.window().elements.length == 0, "UIAElements present");
		this.target().popTimeout();
	}
}


ResultsMapScreen.__proto__ = Screen;