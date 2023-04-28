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
    char1: true,
    char2: false,
    char3: false,
    char4: false,
    char5: false,
  },  
  observers: {
    markerListRaw(newVal) {
      this.setData({
        markerList: newVal,
      })
      this.handleTrackerSwitch();
    },
  },
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      xrScene.event.add('tick', this.handleTick.bind(this));
      console.log('xr-scene', xrScene);
    
      this.handleTrackerSwitch();

    },

    handleTrackerSwitch() {
      const markerList = this.data.markerList;

      for(let i = 0; i < markerList.length; i++) {
        const marker = markerList[i];
        switch (marker.name) {
          case 'char1':
            this.setData({char1: true});
            this.setData({char2: false});
            this.setData({char3: false});
            this.setData({char4: false});
            this.setData({char5: false});
            break;
          case 'char2':
            this.setData({char1: false});
            this.setData({char2: true});
            this.setData({char3: false});
            this.setData({char4: false});
            this.setData({char5: false});
          break;
          case 'char3':
            this.setData({char1: false});
            this.setData({char2: false});
            this.setData({char3: true});
            this.setData({char4: false});
            this.setData({char5: false});
          break;
          case 'char4':
            this.setData({char1: false});
            this.setData({char2: false});
            this.setData({char3: false});
            this.setData({char4: true});
            this.setData({char5: false});
          break;
          case 'char5':
            this.setData({char1: false});
            this.setData({char2: false});
            this.setData({char3: false});
            this.setData({char4: false});
            this.setData({char5: true});
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
    handleARReady: function ({detail}) {
      console.log('arReady');
      this.setData({arReady: true});
    },
    handleTick: function () {
      const xrSystem = wx.getXrFrameSystem();
      const trackerEl = this.scene.getElementById('tracker');
      if (!trackerEl) {
        return;
      }

      const tracker = trackerEl.getComponent(xrSystem.ARTracker);
      if (!tracker.arActive) {
        return
      }

      // 这里只是例子，实际上用的是`ARTracker`的`autoSync`属性。
      // 但也是一个更高自由度的选项。
      // 视情况需要自己同步`tracker`的`scale`和`rotation`特定节点。
      // 第一个参数是特征点编好，第二个是可选的复用结果，第三个是可选的是否相对于`ARTracker`。
      // 为`false`为世界空间的位置，需要配合`scale`自己使用
      const position = tracker.getPosition(98, new xrSystem.Vector3(), false);
      // 获取总体置信度
      const score = tracker.score;

      this.triggerEvent('info', {score});
    }
  }
})