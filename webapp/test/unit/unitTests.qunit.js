/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"bpmaint01/bpmaint01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});