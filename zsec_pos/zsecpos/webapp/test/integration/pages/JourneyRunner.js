sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zsecpos/test/integration/pages/PositionDataList",
	"zsecpos/test/integration/pages/PositionDataObjectPage"
], function (JourneyRunner, PositionDataList, PositionDataObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zsecpos') + '/test/flp.html#app-preview',
        pages: {
			onThePositionDataList: PositionDataList,
			onThePositionDataObjectPage: PositionDataObjectPage
        },
        async: true
    });

    return runner;
});

