import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Video } from '@tarojs/components'
import ButtonList from '@/components/buttonList'
import './index.scss'
import { TestConsole } from '@/util/util'

/**
 * 媒体-视频
 * @returns
 */
let videoContext
export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 'saveVideoToPhotosAlbum',
        func: (apiIndex) => {
          TestConsole.consoleTest('saveVideoToPhotosAlbum')
          Taro.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success: function (res) {
              Taro.saveVideoToPhotosAlbum({
                filePath: res.tempFilePath,
                success: (res) => {
                  TestConsole.consoleSuccess.call(this, res, apiIndex)
                },
                fail: (res) => {
                  TestConsole.consoleFail.call(this, res, apiIndex)
                },
                complete: (res) => {
                  TestConsole.consoleComplete.call(this, res, apiIndex)
                },
              }).then((res) => {
                TestConsole.consoleReturn.call(this, res, apiIndex)
              })
            },
          })
        },
      },
      {
        id: 'openVideoEditor',
        func: (apiIndex) => {
          TestConsole.consoleTest('openVideoEditor')
          Taro.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success: function (res) {
              Taro.openVideoEditor({
                filePath: res.tempFilePath,
                success: (res) => {
                  TestConsole.consoleSuccess.call(this, res, apiIndex)
                },
                fail: (res) => {
                  TestConsole.consoleFail.call(this, res, apiIndex)
                },
                complete: (res) => {
                  TestConsole.consoleComplete.call(this, res, apiIndex)
                },
              }).then((res) => {
                TestConsole.consoleReturn.call(this, res, apiIndex)
              })
            },
          })
        },
      },
      {
        id: 'getVideoInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('getVideoInfo')
          Taro.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success: function (res) {
              Taro.getVideoInfo({
                src: res.tempFilePath,
                success: (res) => {
                  TestConsole.consoleSuccess.call(this, res, apiIndex)
                },
                fail: (res) => {
                  TestConsole.consoleFail.call(this, res, apiIndex)
                },
                complete: (res) => {
                  TestConsole.consoleComplete.call(this, res, apiIndex)
                },
              }).then((res) => {
                TestConsole.consoleReturn.call(this, res, apiIndex)
              })
            },
          })
        },
      },
      {
        id: 'createVideoContext',
        func: (apiIndex) => {
          TestConsole.consoleTest('createVideoContext')
          videoContext = Taro.createVideoContext('myVideo')
          TestConsole.consoleNormal('createVideoContext ', videoContext)
        },
      },
      {
        id: 'compressVideo_暂不支持',
        func: null,
      },
      {
        id: 'chooseVideo_album',
        func: (apiIndex) => {
          TestConsole.consoleTest('chooseVideo_album')
          Taro.chooseVideo({
            sourceType: ['album'],
            maxDuration: 60,
            camera: 'back',
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
          }).then((res) => {
            TestConsole.consoleReturn.call(this, res, apiIndex)
          })
        },
      },
      {
        id: 'chooseVideo_camera',
        func: (apiIndex) => {
          TestConsole.consoleTest('chooseVideo_camera')
          Taro.chooseVideo({
            sourceType: ['camera'],
            maxDuration: 60,
            camera: 'back',
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
          }).then((res) => {
            TestConsole.consoleReturn.call(this, res, apiIndex)
          })
        },
      },
      {
        id: 'chooseMedia_image',
        func: (apiIndex) => {
          TestConsole.consoleTest('chooseMedia_image')
          Taro.chooseMedia({
            count: 9,
            mediaType: ['image'],
            sourceType: ['album', 'camera'],
            maxDuration: 30,
            camera: 'back',
            sizeType: ['original', 'compressed'],
            // mediaId: 'test mediaId field',//'mediaId' does not exist in type 'Option'
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
          }).then((res) => {
            TestConsole.consoleReturn.call(this, res, apiIndex)
          })
        },
      },
      {
        id: 'videoContext_exitBackgroundPlayback_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_exitBackgroundPlayback')
          videoContext.exitBackgroundPlayback()
          TestConsole.consoleNormal('exitBackgroundPlayback')
        },
      },
      {
        id: 'videoContext_exitFullScreen',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_exitFullScreen')
          videoContext.exitFullScreen()
          TestConsole.consoleNormal('exitFullScreen')
        },
      },
      {
        id: 'videoContext_exitPictureInPicture_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_exitPictureInPicture')
          videoContext
            .exitPictureInPicture({
              success: (res) => {
                TestConsole.consoleSuccess.call(this, res, apiIndex)
              },
              fail: (res) => {
                TestConsole.consoleFail.call(this, res, apiIndex)
              },
              complete: (res) => {
                TestConsole.consoleComplete.call(this, res, apiIndex)
              },
            })
            .then((res) => {
              TestConsole.consoleReturn.call(this, res, apiIndex)
            })
        },
      },
      {
        id: 'videoContext_hideStatusBar_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_hideStatusBar')
          videoContext.hideStatusBar()
          TestConsole.consoleNormal('hideStatusBar')
        },
      },
      {
        id: 'videoContext_pause',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_pause')
          videoContext.pause()
          TestConsole.consoleNormal('pause')
        },
      },
      {
        id: 'videoContext_play',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_play')
          videoContext.play()
          TestConsole.consoleNormal('play')
        },
      },
      {
        id: 'videoContext_playbackRate_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_playbackRate')
          videoContext.playbackRate(1.5)
          TestConsole.consoleNormal('playbackRate')
        },
      },
      {
        id: 'videoContext_requestBackgroundPlayback_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_requestBackgroundPlayback')
          videoContext.requestBackgroundPlayback()
          TestConsole.consoleNormal('requestBackgroundPlayback')
        },
      },
      {
        id: 'videoContext_requestFullScreen',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_requestFullScreen')
          videoContext.requestFullScreen({
            direction: 0,
          })
          TestConsole.consoleNormal('requestFullScreen')
        },
      },
      {
        id: 'videoContext_seek',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_seek')
          videoContext.seek(5)
          TestConsole.consoleNormal('seek')
        },
      },
      {
        id: 'videoContext_sendDanmu_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_sendDanmu')
          videoContext.sendDanmu({
            text: '测试弹幕',
            color: '#FFF',
          })
          TestConsole.consoleNormal('sendDanmu')
        },
      },
      {
        id: 'videoContext_showStatusBar_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_showStatusBar')
          videoContext.showStatusBar()
          TestConsole.consoleNormal('showStatusBar')
        },
      },
      {
        id: 'videoContext_stop',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_stop')
          videoContext.stop()
          TestConsole.consoleNormal('stop')
        },
      },
    ],
  }
  render() {
    const { list } = this.state
    return (
      <View className='api-page'>
        <ButtonList buttonList={list} />
        <Video id='myVideo' src='https://storage.360buyimg.com/jdrd-blog/27.mp3' />
      </View>
    )
  }
}
