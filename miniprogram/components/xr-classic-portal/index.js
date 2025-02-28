Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    markerListRaw: {
      type: Array,
      value: []
    },
    questionsPending: {
      type: Boolean,
      value: false,
      observer: function(newval, oldval){
        this.setData({questionsPending: newval})
      }
    },
    placePending: {
      type: Boolean,
      value: false,
      observer: function(newval, oldval){
        this.setData({pending: newval})
      }
    }

  },
  data: {
    loaded: false,
    arReady: false,
    char1: false,
    char2: false,
    char3: false,
    char4: false,
    char5: false,
    char6: false,
    char7: false,
    char8: false,
    char9: false,
    anchor: false,
    pending: false,
    questionsPending: false,
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
          case 'char4':
            this.handleChar4Tick();
            break;
          case 'char5':
            this.handleChar5Tick();
            break;
          case 'char6':
            this.handleChar6Tick();
            break;       
          case 'char7':
            this.handleChar7Tick();
            break;
          case 'char8':
            this.handleChar8Tick();
            break;
          case 'char9':
            this.handleChar9Tick();
            break;
          case 'clean':
            this.handleCleanAll();
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
    handleStateSwitch: function () {
      this.setData({pending: true});
      this.triggerEvent('pendingStateSwitch', this.data.pending);
      this.setData({anchor: true});
    },

    handleChar1Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar1Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar2Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar2Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar3Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar3Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar4Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar4Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar5Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar5Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar6Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar6Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar7Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar7Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar8Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar8Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar9Tick: function () {
      if (this.data.pending) return;
      this.handleStateSwitch();
      this.scene.event.addOnce('touchstart', this.placeChar9Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    placeChar1Node(event) {

      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar1Node.bind(this));
      } else {
        this.scene.ar.placeHere('char1', true);
        this.setData({anchor: false});
        this.setData({char1: true});
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },

    placeChar2Node(event) {

      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar2Node.bind(this));
      } else {
        this.scene.ar.placeHere('char2', true);
        this.setData({anchor: false});
        this.setData({char2: true});
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);

        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },

    placeChar3Node(event) {

      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar3Node.bind(this));
      } else {
        this.scene.ar.placeHere('char3', true);
        
        this.setData({anchor: false});
        this.setData({char3: true});        
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },
    placeChar4Node(event) {
      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar4Node.bind(this));
      } else {
        this.scene.ar.placeHere('char4', true);
        
        this.setData({anchor: false});
        this.setData({char4: true});        
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },
    placeChar5Node(event) {
      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar5Node.bind(this));
      } else {
        this.scene.ar.placeHere('char5', true);
        
        this.setData({anchor: false});
        this.setData({char5: true});        
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },
    placeChar6Node(event) {
      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar6Node.bind(this));
      } else {
        this.scene.ar.placeHere('char6', true);

        this.setData({anchor: false});
        this.setData({char6: true});
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },
    placeChar7Node(event) {
      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar7Node.bind(this));
      } else {
        this.scene.ar.placeHere('char7', true);

        this.setData({anchor: false});
        this.setData({char7: true});
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },
    placeChar8Node(event) {
      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar8Node.bind(this));
      } else {
        this.scene.ar.placeHere('char8', true);

        this.setData({anchor: false});
        this.setData({char8: true});
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },
    placeChar9Node(event) {
      const {clientX, clientY} = event.touches[0];
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.7) {
        this.scene.ar.resetPlane();
        this.scene.event.addOnce('touchstart', this.placeChar9Node.bind(this));
      } else {
        this.scene.ar.placeHere('char9', true);

        this.setData({anchor: false});
        this.setData({char9: true});
        this.setData({pending: false});
        this.triggerEvent('pendingStateSwitch', this.data.pending);
        wx.setKeepScreenOn({keepScreenOn: true});
      }
    },

    handleTouchModel: function (event) {
      const {value, el} = event.detail;
      
      console.log(this.scene.canvas);
      // if (value.y / this.scene.frameHeight > 2) {
      //   return;
      // }
      if (this.data.pending || this.data.questionsPending) {
        return;
      }

      this.triggerEvent('touchModel', event.detail.value);
    },

    handleCleanAll: function () {
      if (this.data.pending|| this.data.questionsPending) return;
      this.scene.ar.resetPlane();
      this.setData({char1: false});
      this.setData({char2: false});
      this.setData({char3: false});
      this.setData({char4: false});
      this.setData({char5: false});
      this.setData({char6: false});
      this.setData({char7: false});
      this.setData({char8: false});
      this.setData({char9: false});
    }
  }
})