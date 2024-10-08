import { Map } from 'immutable';
import * as actionType from './actionType';
// 使用immutable管理state

const defaultState = Map({
  playList: [
    {
      name: '世间美好与你环环相扣',
      id: 1363948882,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 31876221,
          name: '柏松',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 19,
      crbt: null,
      cf: '',
      al: {
        id: 78938226,
        name: '听闻余生',
        picUrl:
          'https://p2.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg',
        tns: [],
        pic_str: '109951164071024476',
        pic: 109951164071024480,
      },
      dt: 191960,
      h: {
        br: 320000,
        fid: 0,
        size: 7681089,
        vd: -37574,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4608671,
        vd: -34959,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3072462,
        vd: -33277,
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10909947,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 0,
    },
  ],
  currentSongIndex: 0,
  currentSong: {},
  playSequence: 0, // 0循环播放  1随机播放  2单曲循环
  firstLoad: true,
  lyricList: [],
  currentLyricIndex: 0,
  addSongDetail: {},
  playListCount: 3,
  hotComments: [],
  rankIsPlay: false,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    case actionType.CHANGE_RANK_PLAY:
      return state.set('playList', action.rankIsPlay);
    case actionType.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList);
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index);
    case actionType.CHANGE_PLAY_SEQUENCE:
      return state.set('playSequence', action.sequence);
    case actionType.CHANGE_FIRST_LOAD:
      return state.set('firstLoad', action.isLoad);
    case actionType.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyric);
    case actionType.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.index);
    case actionType.CHANGE_ADD_SONG_DETAIL:
      return state.set('addSongDetail', action.addSongDetail);
    case actionType.CHANGE_PLAY_LIST_COUNT:
      return state.set('playListCount', action.count);
    case actionType.CHANGE_HOT_COMMENT:
      return state.set('hotComments', action.hotComments);
    default:
      return state;
  }
}

export default reducer;
