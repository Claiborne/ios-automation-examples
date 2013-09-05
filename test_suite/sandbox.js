#import "env.js"

var target = UIATarget.localTarget();
var window = target.frontMostApp().mainWindow();
var tableView = window.tableViews()[0];
var cell = tableView.cells()['coffee'];
cell.tap();

