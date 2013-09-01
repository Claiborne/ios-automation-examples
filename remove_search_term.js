try {
UIALogger.logStart("Remove 'coffee' cell");
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var tableView = window.tableViews()[0];
var cells = tableView.cells();

UIALogger.logMessage("Turn on edit mode");
var navigationBar = app.navigationBar();
var editButton = navigationBar.leftButton();
editButton.tap();

UIALogger.logMessage("Delete cell named 'coffee'");
var coffeeCell = cells["coffee"];

var deleteSwitch = coffeeCell.switches()[0];
deleteSwitch.tap();

var deleteButton = coffeeCell.buttons()[0];
deleteButton.tap();

target.pushTimeout(0.1);
coffeeCell.waitForInvalid();
target.popTimeout();

if (coffeeCell.isValid()) {
	throw new Error("Cell not removed")
}

UIALogger.logMessage("Turn off edit mode");
editButton.tap();

UIALogger.logPass("Test complete");
} catch(exception) {
	UIALogger.logError(exception.message);
	UIATarget.localTarget().logElementTree();
	UIALogger.logFail("Test failed");
	throw exception;
}