/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 09:02:10
 * @LastEditTime: 2022-07-13 10:08:20
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
 */
import { SETTINGS } from '../mutation-types'

const getState = () => ({
    app: "phone"
});
const state = getState();

const actions = {
    change({ commit }) {
        setTimeout(() => {
            commit(SETTINGS)
        }, 1000)
    }
};

const mutations = {
    [SETTINGS](state) {
        state.app = "web"
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};