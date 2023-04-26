
Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    intro: {
      type: String,
      value: '',
    },
    showBackBtn: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    scene: null,
  },
  lifetimes: {
    attached() {
      wx.xrTitle = this.data.title;
    }

  },
  methods: {
    onClickBack() {
      wx.navigateBack()
    },
    handleShare: function() {      
      wx.xrScene.share.captureToFriends();
    },
  }
})