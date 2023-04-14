var sceneReadyBehavior = require('../../behavior-scene/scene-ready');
var handleDecodedXML = require('../../behavior-scene/util').handleDecodedXML;
var xmlCode = ``;
Page({
  behaviors: [sceneReadyBehavior],
  data: {
    xmlCode: '<div class="codeWrap">' + handleDecodedXML(xmlCode) + '</div>',
    progressInfo: '',
    loaded: false,
  },
  handleInfo: function({detail}) {
    this.setData({score: detail.score.toFixed(2)});
  },
  handleProgress: function({detail}) {
    console.log('assets progress', detail);
    this.setData({progressInfo: `${~~(detail.progress * 100)} %\n\n${detail.asset.assetId}(${detail.asset.type}): ${detail.asset.src}`});
  },
  handleLoaded: function({detail}) {
    console.log('assets loaded at page', detail);
    this.setData({loaded: true});
  }
});