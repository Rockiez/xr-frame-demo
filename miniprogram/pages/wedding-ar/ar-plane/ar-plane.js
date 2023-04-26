var sceneReadyBehavior = require('../../behavior-scene/scene-ready');
var handleDecodedXML = require('../../behavior-scene/util').handleDecodedXML;
var xmlCode = ``;

import questionsList from './data/data';

Page({
  behaviors:[sceneReadyBehavior],
  data: {
    xmlCode: '<div class="codeWrap">' + handleDecodedXML(xmlCode) + '</div>',
    progressInfo: '',
    loaded: false,
    char1: false,
    char2: false,
    char3: false,
    char4: false,
    clean: false,
    pending: false,
    awardDialog:false,
    markerList: [],
    questionsList,
    questionWrongFlag: false,
    questionsStart: false,
    optionsExist: false,
    currentQuestion: 0,
    currentQuestionContext: '沙漠死神的哪个技能可以叠加攻击值？',
    optionAContext:'A. 火焰之刃',
    optionBContext:'B. 火焰之刃',
  },
  onReady() {
    // this.handleQuestionsStart();
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
    if (this.data.char4) {
      markerList.push({
        name: 'char4',
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
    if (this.data.pending) {
      return;
    }
    this.setData({
      char1: true,
      char2: false,
      char3: false,
      char4: false,
    });

    this.refreshData();
  },
  tapChar2() {
    if (this.data.pending) {
      return;
    }
    this.setData({
      char1: false,
      char2: true,
      char3: false,
      char4: false,
    
    });

    this.refreshData();
  },
  tapChar3() {
    if (this.data.pending) {
      return;
    }
    this.setData({
      char1: false,
      char2: false,
      char3: true,
      char4: false,
    });

    this.refreshData();
  },
  tapChar4() {
    if (this.data.pending) {
      return;
    }
    this.setData({
      char1: false,
      char2: false,
      char3: false,
      char4: true,
    });

    this.refreshData();
  },
  tapClean() {
    if (this.data.pending) {
      return;
    }

    const markerList = [];
      markerList.push({
        name: 'clean',
      });


    this.setData({
      markerList: markerList
    });
  },
  handleQuestionsStart() {
    console.log('handleQuestionsStart');
    if(this.data.questionsStart) {
      return;
    }
    this.setData({
      currentQuestion: -1,
      questionsStart: true,
    });
    this.nextStep(this.data.currentQuestion);
  },

  nextStep(questionIndex) {
    console.log('nextStep');

    if(questionIndex >= this.data.questionsList.length -1) {
      this.setData({
        optionsExist: false,
        awardDialog: true,
      });
      return;
    }
    var nextIndex = questionIndex + 1;
    if (this.data.questionsList[nextIndex].options != undefined) {
      this.setData({
        currentQuestion: nextIndex,
        currentQuestionContext: this.data.questionsList[nextIndex].question,
        optionsExist: true,
        optionAContext: 'A. ' + this.data.questionsList[nextIndex].options[0],
        optionBContext: 'B. ' + this.data.questionsList[nextIndex].options[1],
      });
      console.log(this.data.currentQuestion)
    }else{
      this.setData({
        currentQuestion: nextIndex,
        currentQuestionContext: this.data.questionsList[nextIndex].question,
        optionsExist: false,
      });
      console.log(this.data.currentQuestion)
    }
  },
  tapQuestionBox(){
    if(this.data.optionsExist){
      return;
    }
    this.nextStep(this.data.currentQuestion);
  },
  tapOptionABox(){
    
    if(!this.data.optionsExist){
      return;
    }
    if('A. ' + this.data.questionsList[this.data.currentQuestion].answer == this.data.optionAContext){
      this.nextStep(this.data.currentQuestion);
    }else{
      this.handleWrongAnswer();
    }

    console.log(this.data.currentQuestion);
    console.log('A. ' + this.data.questionsList[this.data.currentQuestion].answer);
    console.log(this.data.optionAContext);
  },
  tapOptionBBox(){
    if(!this.data.optionsExist){
      return;
    }
    if('B. ' +this.data.questionsList[this.data.currentQuestion].answer == this.data.optionBContext){
      this.nextStep(this.data.currentQuestion);
    }else{
      this.handleWrongAnswer();
    }
  },
  handleWrongAnswer(){
    console.log('handleWrongAnswer');
    this.setData({
      currentQuestion: this.data.questionsList.length,
      currentQuestionContext: "你的答案有误，请重新开始！",
      optionsExist: false,
      questionWrongFlag: true,
    });
  },
  handleTouchModel(){
    console.log('handleTouchModel');
    this.handleQuestionsStart();

  },
  handlePendingStateSwitch(event){
    console.log('handlePendingStateSwitch', event);
    this.setData({
      pending: event.detail,
    });
  },
    // 长按保存功能
    saveImage (e) {
      const url = "https://thh-ar-miniprogram.obs.cn-east-3.myhuaweicloud.com:443/award.png?AccessKeyId=5BWMQQ24QVRXZFXDRO86&Expires=1713493148&Signature=WPU6aqM60lfO2orFIE5eR%2BwgPNg%3D";
      const { saveImage1, saveImage2, saveImage3, saveImage4 } = this
      saveImage1(url).then(saveImage2).then(saveImage3).then(saveImage4)
    },
    // 吊起 actionsheet
    saveImage1 (url) {
      const p1 = new Promise((resolve, reject) => {
        wx.showActionSheet({
          itemList: ['保存到相册'],
          success: res => {
            resolve(url)
          },
          fail: err => {
            reject(err)
          }
        })
      })
      return p1
    },
    // 授权
    saveImage2 (url) {
      const p2 = new Promise((resolve, reject) => {
        wx.getSetting({
          success: settings => {
            if (!settings.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success: () => {
                    // 同意授权
                    resolve(url)
                },
                fail: () => {
                    wx.showModal({
                        title: '保存失败',
                        content: '请开启访问手机相册权限',
                        success: () => {
                          wx.openSetting()
                        }
                    })
                    reject()
                }
              })
            } else {
              // 已经有权限了
              resolve(url)
            }
          }
        })
      })
      return p2
    },
    // 转换图片格式为本地路径
    saveImage3 (url) {
      const p3 = new Promise((resolve, reject) => {
        wx.getImageInfo({
          src: url,
          success: res => {
            resolve(res.path);
            this.setData({
              awardDialog: false,
              questionsStart: false,
              questionWrongFlag: false,
            });
            
          },
          fail: () => {
            reject()
          }
        })
      })
      return p3
    },
    // 保存
    saveImage4 (path) {
      const p4 = new Promise((resolve, reject) => {
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success: () => {
              wx.showToast({
                 title: '已保存到相册',
              })
          },
          fail: err => {
            console.log(err)
          }
        })
      })
      return p4
    },
    tapAwardDialogClose(){
      if (this.data.awardDialog) {
        this.setData({
          awardDialog: false,
          questionsStart: false,
          questionWrongFlag: false,
        });
      }
    },


});