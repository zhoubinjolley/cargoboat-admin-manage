/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 08:36:32
 * @LastEditTime: 2022-07-14 13:18:25
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
 */
import request from "@/utils/request";

export function API(data) {
    return request({
        method: "POST",
        url: data.url,
        data: data.data
    })
}

export function API_GET(data) {
    return request({
        method: "GET",
        url: data.url,
    })
}

