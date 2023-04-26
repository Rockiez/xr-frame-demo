// import '../../xr-custom/components/AutoRotate';
// import '../../xr-custom/elements/xr-auto-rotate-touchable-gltf';
// import '../../xr-custom/assets/geometry-star';
// import '../../xr-custom/assets/effect-shining';
// import '../../xr-custom/elements/xr-shining-star';
// import '../../xr-custom/assets/effect-last-record-final';

import list from './data/data';

let lastOpened = false;
let lastCount = 0;
let first = true;

Page({
  data: {
    width: 300, height: 300,
    renderWidth: 300, renderHeight: 300,
    texts: [],
    list,
    root: '',
    progressInfo: '',
    loaded: false,
    
  },
  onLoad() {
    const info = wx.getSystemInfoSync();
    const lwidth = info.windowWidth;
    const lheight = info.windowHeight;
    const width = Math.min(info.windowWidth * 0.7, info.windowHeight * 0.35);
    const height = width;
    const dpi = info.pixelRatio;
    this.setData({
      width, height,
      renderWidth: width * dpi,
      renderHeight: height * dpi,

      lwidth, lheight,
      lrenderWidth: lwidth * dpi,
      lrenderHeight: lheight * dpi
    });

    if (first) {
      console.log('Entry AR Wedding page');
      wx.reportEvent("xr_frame", {
        "xr_page_path": '/pages/index/index'
      });
      first = false;
    }
  },
  onShareAppMessage() {
    return {
      title: 'AR 婚礼'
    }
  },
  onShareTimeline() {
    return {
      title: 'AR 婚礼'
    }
  },
  clickHandle(e) {
    console.log(e);

    let root = this.data.root;
    let path = e.detail.path;
    if (!path) {
      return;
    }
    if (path) {
      wx.redirectTo({
        url: root + path + `?path=${path}`,
        success: () => {
        },
        fail: () => {
        },
      });
    }
  },
  handleProgress: function({detail}) {
    console.log('assets progress', detail);
    this.setData({progressInfo: `${~~(detail.progress * 100)} %\n\n${detail.asset.assetId}(${detail.asset.type}): ${detail.asset.src}`});
  },
  handleLoaded: function({detail}) {
    console.log('assets loaded at page', detail);
    this.setData({loaded: true});
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
    })

  },
});
