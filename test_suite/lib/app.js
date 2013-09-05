var App = {
	isOniPad: function() {
		return this.target().model().match('iPad');
	},
	
	target: function() {
		return UIATarget.localTarget();
	},
	
	rotateLandscape: function() {
		this.target().setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT)
	}
};