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

    handleChar1Tick: function () {
      if (this.data.pending) return;
      this.setData({pending: true});
      this.triggerEvent('pendingStateSwitch', this.data.pending);

      this.setData({anchor: true});
      this.scene.event.addOnce('touchstart', this.placeChar1Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar2Tick: function () {
      if (this.data.pending) return;
      this.setData({pending: true});
      this.triggerEvent('pendingStateSwitch', this.data.pending);

      this.setData({anchor: true});
      this.scene.event.addOnce('touchstart', this.placeChar2Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar3Tick: function () {
      if (this.data.pending) return;
      this.setData({pending: true});
      this.triggerEvent('pendingStateSwitch', this.data.pending);

      this.setData({anchor: true});
      this.scene.event.addOnce('touchstart', this.placeChar3Node.bind(this));
      wx.showToast({title: '点击屏幕放置模型', icon: 'none'});
    },
    handleChar4Tick: function () {
      if (this.data.pending) return;
      this.setData({pending: true});
      this.triggerEvent('pendingStateSwitch', this.data.pending);

      this.setData({anchor: true});
      this.scene.event.addOnce('touchstart', this.placeChar4Node.bind(this));
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

    }
  }
})