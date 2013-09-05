var App = {
	isOniPad: function() {
		return this.target().model().match('iPad');
	},
	
	isPortrait: function() {
		var orientation = this.target().deviceOrientation();
		return orientation == UIA_DEVICE_ORIENTATION_PORTRAIT ||
			orientation == UIA_DEVICE_ORIENTATION_PORTRAIT_UPSIDEDOWN;
	},
	
	target: function() {
		return UIATarget.localTarget();
	},
	
	rotateLandscape: function() {
		this.target().setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT)
	},
	
	rotatePortrait: function() {
		this.target().setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT)
	}
};