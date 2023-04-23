var sceneReadyBehavior = require('../../behavior-scene/scene-ready');
var handleDecodedXML = require('../../behavior-scene/util').handleDecodedXML;

Page({
  behaviors: [sceneReadyBehavior],
  data: {
    markerImg: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/marker/2dmarker-test.jpg',
    progressInfo: '',
    loaded: false,
  },
  // handleChangeMarkerImg: function() {
  //   wx.chooseMedia({
  //     count: 1,
  //     sizeType: ['compressed'],
  //     mediaType: ['image'],
  //     sourceType: ['album'],
  //     success: res => {
  //       const fp = res.tempFiles[0].tempFilePath;
  //       this.setData({markerImg: fp});
  //     },
  //     fail: err => {
  //       console.error('[xr-demo]chooseImage failed', err);
  //     }
  //   });
  // },
  handleProgress: function({detail}) {
    console.log('assets progress', detail);
    this.setData({progressInfo: `${~~(detail.progress * 100)} %\n\n${detail.asset.assetId}(${detail.asset.type}): ${detail.asset.src}`});
  },
  handleLoaded: function({detail}) {
    console.log('assets loaded at page', detail);
    this.setData({loaded: true});
  }
});