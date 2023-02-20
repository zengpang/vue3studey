import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:"localhost",//设置
    port:8080,//设置端口
    https:false, //是否启用https
    open:true,//设置代理proxy
    proxy:{
      "/api/v1":{
        target: "http://1.1.1.1:3000/",
        changeOrigin:true,//表示是否跨域
      }
    }
  }
})
