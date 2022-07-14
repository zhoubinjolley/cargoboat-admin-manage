/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 08:37:57
 * @LastEditTime: 2022-07-13 10:04:44
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
 */
import { createStore } from "vuex";
import settings from "./modules/settings";
import user from "./modules/user";
// import getters from "./getter";

const store = createStore({
    modules: {
        user,
        settings
    },
})

export default store;