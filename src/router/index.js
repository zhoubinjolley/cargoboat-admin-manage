/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-12 10:49:41
 * @LastEditTime: 2022-07-13 13:12:48
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "../layout";
const routes = [
    {
        name: "Home",
        path: "/",
        redirect: "/dashboard",
        component: Layout,
        meta: { title: "首頁" },
        children: [
            {
                name: "Home",
                path: "dashboard",
                component: () => import("@/views/home/index"),
                meta: { title: "首頁" }
            }
        ],
    },
    {
        name: "About",
        path: "/about",
        component: () => import("@/views/about/index"),
        meta: { title: "关于" }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router