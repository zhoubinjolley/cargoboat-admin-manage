/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-14 08:30:55
 * @LastEditTime: 2022-07-14 13:26:54
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
 */
import axios from "axios";
import { ElMessage } from "element-plus";
import store from "@/store";
import { removeSession } from "@/utils";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // set token
    // const token = store.getters.token;
    // if (token) {
    //   config.headers.Authorization = `${token}`;
    // }
    if (config && config.contentType) {
      config.headers["Content-Type"] = `${config.contentType};charset=UTF-8`;
      //form-data格式
      if (config.contentType == "form-data") {
        const formData = new FormData();
        for (let i in config.data) {
          formData.append(i, config.data[i]);
        }
        config.data = formData;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { status, data: { code, msg }, config } = response;
    if (code !== 200) {
      switch (code) {
        case 401:
          errorMsg("登录过期，请重新登录");
          store.dispatch("user/kcLogout");
          break;
        default:
          errorMsg(msg || `后端接口异常,status：${status}，code：${code}`);
          break;
      }
      Promise.reject(
        "请求异常拦截:" + JSON.stringify({ url: config.url, code, msg })
      );
      return data;
    }
    return data;
  },
  (error) => {
    // 接口未授权的情况
    if (error.response.status === 401) {
      store.dispatch("user/kcLogout");
    } else {
      errorMsg(error.message);
      return Promise.reject(error);
    }
  }
);
const errorMsg = (message) => {
  return ElMessage({
    message: message,
    type: "error",
    duration: 3000,
  });
};
export default service;
