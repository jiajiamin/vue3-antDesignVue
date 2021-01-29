/*
 * @Author: your name
 * @Date: 2020-10-23 14:14:03
 * @LastEditTime: 2021-01-29 10:32:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data_governance\src\axios\dataQuality.js
 */
import { get, post, put, deletefn } from "./axios";


//数据资产-资产共享-资产申请审核
const base = {
    // 资产分类
    find: `/find`,
}
export const baseApi={
    Find:function Find(params) {
        return post(base.find, params);
    }
}
// 应用
// import {baseApi} from '@axios/api.js';
// baseApi.Find(data).then((res)=>{
//     if (res.status == 200) {
        
//     }
// })