Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    markerListRaw: {
      type: Array,
      value: []
    },
  },
  data: {
    loaded: false,
    arReady: false,
    char1: false,
    char2: false,
    char3: false,
    anchor: false,
    pending: false,
  },
  lifetimes: {
    detached() {
      wx.setKeepScreenOn({keepScreenOn: false});
    }
  },  
  observers: {
    markerListRaw(newVal) {
      this.setData({
        markerList: newVal,
      });
      this.handleTrackerSwitch();
    },
  },
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      this.inRealWorld = true;
      console.log('xr-scene', xrScene);
    },

    handleTrackerSwitch() {
      const markerList = this.data.markerList;
      for(let i = 0; i < markerList.length; i++) {
        const marker = markerList[i];
        switch (marker.name) {
          case 'char1':
            this.handleChar1Tick();
            break;
          case 'char2':
            this.handleChar2Tick();
            break;       
          case 'char3':
            this.handleChar3Tick();
            break;
        }
      }
      console.log("markerList" , markerList);
    },

    handleAssetsProgress: function ({detail}) {
      console.log('assets progress', detail.value);
      this.triggerEvent('assetsProgress', detail.value);
    },
    handleAssetsLoaded: function ({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
      this.triggerEvent('assetsLoaded', detail.value);
    },

    handleChar1Tick: function () {
      if (this.data.pending) return;
      this.setData({pending: true});
      this.setData({anchor: true});
      this.scene.event.addOnce('touchstart', this.placeChar1Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar2Tick: function () {
      if (this.data.pending) return;
      this.setData({pending: true});
      this.setData({anchor: true});
      this.scene.event.addOnce('touchstart', this.placeChar2Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar3Tick: function () {
      if (this.data.pending) return;
      this.setData({pending: true});
      this.setData({anchor: true});
      this.scene.event.addOnce('touchstart', this.placeChar3Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },

    placeChar1Node(event) {

      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.5 && clientX / width > 0.8) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar1Node.bind(this));
      } else {
        this.scene.ar.placeHere('char1', true);
        this.setData({anchor: false});
        this.setData({char1: true});
        this.setData({pending: false});
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },

    placeChar2Node(event) {

      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.5 && clientX / width > 0.8) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar2Node.bind(this));
      } else {
        this.scene.ar.placeHere('char2', true);
        this.setData({anchor: false});
        this.setData({char2: true});
        this.setData({pending: false});
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },

    placeChar3Node(event) {

      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.5 && clientX / width > 0.8) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar3Node.bind(this));
      } else {
        this.scene.ar.placeHere('char3', true);
        
        this.setData({anchor: false});
        this.setData({char3: true});        
        this.setData({pending: false});
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },

    handleTouchModel: function ({detail}) {

      if (this.data.pending) {
        return;
      }

      const {target} = detail.value;
      const id = target.id;
      
      wx.showToast({title: `点击了模型： ${id}`, icon: 'none'});
    },
  }
})