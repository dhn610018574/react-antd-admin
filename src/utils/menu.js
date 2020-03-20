import React from 'react'
import {
  FireTwoTone,
  LikeTwoTone,
  RocketTwoTone,
  HddTwoTone,
  BuildTwoTone,
  EditTwoTone,
  DiffTwoTone,
  ControlTwoTone,
  CopyrightTwoTone,
  CustomerServiceTwoTone,
  CopyTwoTone,
  Html5TwoTone,
  TagsTwoTone,
  ProfileTwoTone,
  SoundTwoTone,
  SyncOutlined,
  StarTwoTone,
  TrophyTwoTone,
  ThunderboltTwoTone,
  BoxPlotTwoTone,
  SlidersTwoTone,
  VideoCameraTwoTone,
  TrademarkCircleTwoTone,
  SmileTwoTone,
  HourglassTwoTone,
  PictureTwoTone,
  FundTwoTone,
  FunnelPlotTwoTone,
  PieChartTwoTone,
} from '@ant-design/icons';

export default [
  {
    key: 1,
    icon: <FireTwoTone />,
    label: 'Antd',
    path: '/home',
    subMenu: [
      {
        key: '1-1',
        icon: <FireTwoTone />,
        label: 'ant-1',
        path: '/demo',
        subMenu: [{
          key: '1-1-1',
          icon: <FireTwoTone />,
          label: 'ant-1-1',
          path: '/demo-1'
        }]
      },
      {
        key: '1-2',
        icon: <FireTwoTone />,
        label: 'ant-2',
        path: '/demo2'
      }
    ]
  },
  {
    key: 2,
    icon: <LikeTwoTone />,
    label: '可视化图表',
    path: '/adf',
    subMenu: []
  },
  {
    key: 3,
    icon: <RocketTwoTone />,
    label: 'react-router',
    path: '/react-router'
  },
  {
    key: 4,
    icon: <HddTwoTone />,
    label: '布局'
  },
  {
    key: 5,
    icon: <BuildTwoTone />,
    label: '拖拽'
  },
  {
    key: 6,
    icon: <EditTwoTone />,
    label: '代码编辑器'
  },
  {
    key: 7,
    icon: <DiffTwoTone />,
    label: '富文本编辑器'
  },
  {
    key: 8,
    icon: <ControlTwoTone />,
    label: 'JSON 显示器'
  },
  {
    key: 9,
    icon: <CopyrightTwoTone />,
    label: '拾色器'
  },
  {
    key: 10,
    icon: <CustomerServiceTwoTone />,
    label: '响应式'
  },
  {
    key: 11,
    icon: <CopyTwoTone />,
    label: '复制到剪贴板'
  },
  {
    key: 12,
    icon: <Html5TwoTone />,
    label: '页面 meta 属性'
  },
  {
    key: 13,
    icon: <TagsTwoTone />,
    label: '图标'
  },
  {
    key: 14,
    icon: <ProfileTwoTone />,
    label: '二维码'
  },
  {
    key: 15,
    icon: <SoundTwoTone />,
    label: '可视化图编辑器'
  },
  {
    key: 16,
    icon: <SyncOutlined />,
    label: '顶部进度条'
  },
  {
    key: 17,
    icon: <StarTwoTone />,
    label: '应用国际化'
  },
  {
    key: 18,
    icon: <TrophyTwoTone />,
    label: '代码高亮'
  },
  {
    key: 19,
    icon: <ThunderboltTwoTone />,
    label: 'Markdown 渲染'
  },
  {
    key: 20,
    icon: <BoxPlotTwoTone />,
    label: '无限滚动'
  },
  {
    key: 21,
    icon: <SlidersTwoTone />,
    label: '地图'
  },
  {
    key: 22,
    icon: <VideoCameraTwoTone />,
    label: '视频播放'
  },
  {
    key: 23,
    icon: <TrademarkCircleTwoTone />,
    label: '右键菜单'
  },
  {
    key: 24,
    icon: <SmileTwoTone />,
    label: 'Emoji'
  },
  {
    key: 25,
    icon: <HourglassTwoTone />,
    label: '分割面板'
  },
  {
    key: 26,
    icon: <PictureTwoTone />,
    label: '图片裁切'
  },
  {
    key: 27,
    icon: <FundTwoTone />,
    label: '趋势线'
  },
  {
    key: 28,
    icon: <FunnelPlotTwoTone />,
    label: '关键字高亮'
  },
  {
    key: 29,
    icon: <PieChartTwoTone />,
    label: '动画'
  },
]
