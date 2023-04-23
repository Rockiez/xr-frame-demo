var sceneReadyBehavior = require('../../behavior-scene/scene-ready');
var handleDecodedXML = require('../../behavior-scene/util').handleDecodedXML;
var xmlCode = ``;
Page({
  behaviors:[sceneReadyBehavior],
  data: {
    xmlCode: '<div class="codeWrap">' + handleDecodedXML(xmlCode) + '</div>',
    progressInfo: '',
    loaded: false,
    char1: true,
    char2: false,
    char3: false,
    markerList: [],
  },
  handleProgress: function({detail}) {
    console.log('assets progress', detail);
    this.setData({progressInfo: `${~~(detail.progress * 100)} %\n\n${detail.asset.assetId}(${detail.asset.type}): ${detail.asset.src}`});
  },
  handleLoaded: function({detail}) {
    console.log('assets loaded at page', detail);
    this.setData({loaded: true});
  },
  refreshData() {
    const markerList = [];
    if (this.data.char1) {
      markerList.push({
        name: 'char1',
      });
    }

    if (this.data.char2) {
      markerList.push({
        name: 'char2',
      });
    }
    if (this.data.char3) {
      markerList.push({
        name: 'char3',
      });
    }
    
    this.setData({
      dataReady: true,
      markerList: markerList
    });

    this.setData({
      debugMsg: 'markerList:' + markerList.length
    })
  },

  tapChar1() {
    this.setData({
      char1: true,
      char2: false,
      char3: false,
    });

    this.refreshData();
  },
  tapChar2() {
    this.setData({
      char1: false,
      char2: true,
      char3: false,    
    });

    this.refreshData();
  },
  tapChar3() {
    this.setData({
      char1: false,
      char2: false,
      char3: true,    
    });

    this.refreshData();
  },

});