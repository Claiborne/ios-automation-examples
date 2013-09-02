"use strict";

function log() {    // Variable # of arguments
    var msg = Array.prototype.join.call(arguments, ', ');
    UIALogger.logMessage(msg);
}

function test(description, steps) {
    try {
        UIALogger.logStart(description);
        steps();
        UIALogger.logPass("Test passed");
    } catch(exception) {
        UIALogger.logError(exception.message);
        UIATarget.localTarget().logElementTree();
        UIALogger.logFail("Test failed");
        throw exception;
    }
}

function assert(value, failMsg) {
    if (value) return;
    if (!failMsg) failMsg = "Assert failed";
    throw new Error(failMsg);
}

function assertEqual(value1, value2, failMsg) {
    if (value1 === value2) return;
    if (!failMsg) failMsg = "Assert Equal failed";
    var fullMsg = failMsg + ": '" + value1 + "'" +
        " !== '" + value2 + "'";
    assert(false, fullMsg);
}

function assertNotEqual(value1, value2, failMsg) {
    if (value1 !== value2) return;
    if (!failMsg) failMsg = "Assert Not Equal failed";
    var fullMsg = failMsg + ": '" + value1 + "'" +
        " === '" + value2 + "'";
    assert(false, fullMsg);
}

// Import screen files into our test environment
#import "lib/screens/screen.js";
#import "lib/screens/search_term_screen.js";
#import "lib/screens/results_screen.js";
#import "lib/screens/results_lists_screen.js";
