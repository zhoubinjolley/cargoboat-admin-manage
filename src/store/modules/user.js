/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 09:02:03
 * @LastEditTime: 2022-07-13 09:54:56
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
 */
import { USERINFO } from '../mutation-types'

const state = {
    name: "jolley",
    age: 18
}

const actions = {
    increment({ commit }) {
        setTimeout(() => {
            commit(USERINFO)
        }, 1000)
    }
}

const mutations = {
    [USERINFO](state) {
        state.age++
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};