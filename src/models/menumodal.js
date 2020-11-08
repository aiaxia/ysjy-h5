// import { dailyAlarmaApi, lineAlarmApi, mainAlarmApi } from '../services/monitoring';

export default {
  namespace: 'menumodal',
  state: {
    menuHidden: true,
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

    },
  },
  effects: {
    *menushow({payload}, { call, put }) {
      yield put({
        type: 'getMenushow',
        payload: {
          menuHidden: payload,
        },
      });
    }
  },
  reducers: {
    getMenushow(state, action) {
      return { ...state, ...action.payload };
    }
  },

};
