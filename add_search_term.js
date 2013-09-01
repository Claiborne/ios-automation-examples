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
if (cell.name() == "coffee") {
    UIALogger.logMessage("'coffee' search term is there");
} else {
    UIALogger.logError("Expected 'coffee' but got '" + cell.name() + "'");
}