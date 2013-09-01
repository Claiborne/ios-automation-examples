try {
UIALogger.logStart("Testing resilts lists for 'coffee'");
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

UIALogger.logMessage("Tap 'coffee' cell");
var coffeeCell = window.tableViews()[0].cells()["coffee"];
coffeeCell.tap();

UIALogger.logMessage("Tap 'List' in bottom nav");
app.toolbar().segmentedControls()[0].buttons()["List"].tap();

var expected = "Peet's Coffee & Tea, 0.1 mi";
UIALogger.logMessage("Checking for '" + expected + '"');
var cell = window.tableViews()[0].cells()[expected];

if (!cell.isValid()) {
	throw new Error(expected + " not found");
}

//clean up by going back to the starting view
window.navigationBar().leftButton().tap();

UIALogger.logPass("Test complete");
} catch(exception) {
	UIALogger.logError(exception.message);
	UIATarget.localTarget().logElementTree();
	UIALogger.logFail("Test failed");
	window.navigationBar().leftButton().tap();
	throw exception;
}