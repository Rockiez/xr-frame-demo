const classic = {
  name: 'AR典型案例',
  icon: 'photo',
  childArr: [
    {
      name: 'Perspect',
      label: '扫描透视模型',
      path: '/pages/ar-classic/scene-classic-perspect/index',
    },
    {
      name: 'Portal',
      label: '平面传送门',
      path: '/pages/ar-classic/scene-classic-portal/index',
    },
    {
      name: 'Video',
      label: '扫描图片视频',
      path: '/pages/ar-classic/scene-classic-video/index',
    },
    {
      name: 'OSD',
      label: '扫描物体查看信息',
      path: '/pages/ar-classic/scene-classic-osd/index',
    },
    {
      name: 'Face',
      label: '人脸穿戴案例',
      path: '/pages/ar-classic/scene-classic-face/index',
    },
    {
      name: 'Ball',
      label: '扫描微信球',
      path: '/pages/ar-classic/scene-classic-wxball/index',
    }
  ],
};

const base = {
  name: '基础能力',
  icon: 'app',
  childArr: [
    // {
    //   name: 'test',
    //   label: '测试',
    //   path: '/pages/scene-test/index',
    // },
    {
      name: 'Geometry',
      label: '基础图形',
      path: '/pages/basic/scene-basic/index',
    },
    {
      name: 'Light',
      label: '多光源',
      path: '/pages/basic/scene-basic-light/index',
    },
    {
      name: 'Animation',
      label: '动画',
      path: '/pages/basic/scene-basic-animation/index',
    },
    {
      name: 'Video',
      label: '视频纹理',
      path: '/pages/basic/scene-basic-video/index',
    },
    {
      name: 'Interaction',
      label: '交互',
      path: '/pages/basic/scene-basic-touch/index',
    },
    {
      name: 'VisibleLayer',
      label: '显示和图层',
      path: '/pages/basic/scene-basic-visible-layer/index',
    },
    {
      name: 'Shadow',
      label: '动态节点',
      path: '/pages/basic/scene-basic-shadow/index',
    },
    {
      name: 'RenderTexture',
      label: '渲染目标',
      path: '/pages/basic/scene-basic-render-texture/index',
    },
    // {
    //   name: 'Physic',
    //   label: '物理',
    //   path: '/pages/basic/scene-basic-physic/index',
    // },
    {
      name: 'ParticleSystem',
      label: '粒子系统',
      path: '/pages/basic/scene-basic-particle/index',
    },
    {
      name: 'PostProcessing',
      label: '后处理效果',
      path: '/pages/basic/scene-basic-postprocessing/index'
    }
  ],
};
const gltf = {
  name: 'glTF能力',
  icon: 'image',
  childArr: [{
      name: 'Standard',
      label: '标准金属头盔',
      path: '/pages/gltf/scene-gltf-damageHelmet/index',
    },
    {
      name: 'Unlit',
      label: '无光照材质卡通模型',
      path: '/pages/gltf/scene-gltf-unlit/index',
    },
    {
      name: 'Loading',
      label: '加载界面与多光源场景',
      path: '/pages/gltf/scene-gltf-light-loading/index',
    },
    {
      name: 'Animation',
      label: 'gltf动画',
      path: '/pages/gltf/scene-gltf-animation/index',
    },
    {
      name: 'Morph',
      label: 'gltf morph',
      path: '/pages/gltf/scene-gltf-morph/index',
    },
  ],
};

const ar = {
  name: 'AR能力',
  icon: 'scan',
  childArr: [{
      name: 'Camera',
      label: 'AR 相机渲染',
      path: '/pages/ar/scene-ar-camera/index',
    },
    {
      name: 'Basic',
      label: 'AR 平面识别',
      path: '/pages/ar/scene-ar-basic/index',
    },
    {
      name: '2DMarker',
      label: 'AR 2DMarker',
      path: '/pages/ar/scene-ar-2dmarker/index',
    },
    {
      name: 'OSDMarker',
      label: 'AR OSDMarker',
      path: '/pages/ar/scene-ar-osdmarker/index',
    },
    {
      name: 'Face',
      label: 'AR 人脸',
      path: '/pages/ar/scene-ar-face/index',
    },
    {
      name: 'Hand',
      label: 'AR 人手',
      path: '/pages/ar/scene-ar-hand/index',
    },
    {
      name: 'Body',
      label: 'AR 人体',
      path: '/pages/ar/scene-ar-body/index',
    }
  ],
};

const custom = {
  name: '高级定制',
  icon: 'tools',
  childArr: [
    {
      name: 'Logic',
      label: '定制组件和元素',
      path: '/pages/custom/scene-custom-logic/index',
    },
    {
      name: 'Render',
      label: '定制渲染资源',
      path: '/pages/custom/scene-custom-render/index',
    }
  ]
};

const template = {
  name: '通用功能模版',
  icon: 'tools',
  childArr: [
    {
      name: 'Message',
      label: '小程序混合通信',
      path: '/pages/template-logic/index',
    },
    {
      name: 'Controller',
      label: '第一人称漫游',
      path: '/pages/template/template-firstControl/index',
    },
    {
      name: 'Loading',
      label: '动态资源加载与使用',
      path: '/pages/scene-custom-render/index',
    },
    {
      name: 'Tracker',
      label: '动态Tracker切换',
      path: '/pages/scene-custom-render/index',
    }
  ]
};

const scan = {
  name: '扫描还原案例',
  icon: 'photo',
  childArr: [
    {
      name: 'Render',
      label: '扫描渲染案例(全景、模型)',
      path: '/pages/scan/scene-scan-render/index',
    },
    {
      name: 'XRFrameTeam',
      label: '卡其脱离太',
      path: '/pages/scan/scene-scan-team/index',
    }
  ],
};

const production = {
  name: '产品级案例',
  icon: 'tools',
  childArr: [
    {
      name: 'Beside Edge',
      label: '边缘迷走',
      path: '/pages/scene-beside-edge/index'
    },
    {
      name: '',
      label: '■■■■',
      path: '/pages/scene-last-record/index'
    }
  ]
};

export default [base, ar, gltf, custom, template, classic, scan, production];
