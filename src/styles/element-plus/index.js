/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-12 13:16:18
 * @LastEditTime: 2022-07-14 08:39:24
 * @LastEditors: Bin.Zhou
 * @Description: 按需引入element-plus
 * @Copyright: Copyright (c) Reserved 
 */
import {
    ElButton,
    ElInput,
    ElLoading,
    ElMessageBox,
    ElNotification,
    ElMessage
} from 'element-plus'

export default (app) => {
    app.use(ElButton)
    app.use(ElInput)
    app.config.globalProperties.$loading = ElLoading.service
    app.config.globalProperties.$alert = ElMessageBox.alert
    app.config.globalProperties.$confirm = ElMessageBox.confirm
    app.config.globalProperties.$prompt = ElMessageBox.prompt
    app.config.globalProperties.$notify = ElNotification
    app.config.globalProperties.$message = ElMessage
}