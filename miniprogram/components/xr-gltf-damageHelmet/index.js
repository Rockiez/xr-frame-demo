Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    a: Number,
  },
  data: {
    loaded: false
  },
  lifetimes: {
    attached() {
      console.log('data.a', this.data.a) // expected 123
    }
  },
  methods: {
    handleReady: function({detail}) {
      this.scene = detail.value;
      console.log('scene', detail.value);
      
    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
      this.triggerEvent('assetsProgress', detail.value, {bubbles: true});
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});

      this.triggerEvent('assetsLoaded', detail.value, {bubbles: true});
    },
    handleRaf: function({detail}) {
      console.log('raf', detail.value);
    },
  }
})