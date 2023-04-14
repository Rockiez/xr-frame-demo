Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    a: Number,
  },
  data: {
    loaded: false
  },
  lifetimes: {},
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
      this.init();
      this.cameraCtrl.isLockZoom = true;
      this.cameraCtrl.isLockY = true;
    },
    handleRaf: function({detail}) {
      console.log('raf', detail.value);
    },
    init: function() {
      if (!this.camera) {
        const camEl = this.scene.getElementById('camera');
        this.camera = camEl.getComponent(wx.getXrFrameSystem().Camera);
        this.cameraCtrl = camEl.getComponent('camera-orbit-control');


      }
  }}

})