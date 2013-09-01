try {
UIALogger.logStart("Add 'coffee' cell");
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

UIALogger.logMessage("Adding search term 'coffee'");

UIATarget.onAlert = function() {
    return true;
};

app.navigationBar().rightButton().tap();
app.keyboard().typeString("coffee");
app.alert().defaultButton().tap();

var cell = window.tableViews()[0].cells()[0];
if (cell.name() != "coffee") {
    throw new Error("Expected 'coffee' but got '" + cell.name() + "'")
}

UIALogger.logPass("Test complete");
} catch(exception) {
	UIALogger.logError(exception.message);
	UIATarget.localTarget().logElementTree();
	UIALogger.logFail("Test failed");
	throw exception;
}