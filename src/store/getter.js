/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 09:32:28
 * @LastEditTime: 2022-07-13 09:38:00
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
 */
const getters = {
    name: (state) => state.user.name,
    device: (state) => state.settings.app
};
export default getters;