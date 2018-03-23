## 安装依赖
- 开发依赖
```
yarn add babel-core babel-loader babel-plugin-transform-decorators-legacy babel-preset-es2015 babel-preset-stage-0 css-loader style-loader less-loader less file-loader url-loader babel-preset-react webpack webpack-dev-server html-webpack-plugin --dev
```

- 项目依赖
```
yarn add react react-dom redux react-redux react-router-dom axios react-transition-group redux-logger redux-thunk redux-promise babel-polyfill react-swipe swipe-js-iso express body-parser express-session
```

###在线课堂‘web-app'完整介绍

###1、该项目是基于create-react-app脚手架搭建的
- create-react-app project
- 修改public里面的内容

已安装模块
- react
- react-dom
- webpack配置这一套：babel系列、css加载器系列、一些合并压缩的插件、自动创建服务预览的插件...
- ...

后期我们会用到的模块但是没有默认安装的
- redux/react-redux
- react-router-dom
- prop-types
- less/less-loader (修改一下webpack配置)
- axios
- redux中间件
- ...
>我们后期需要修改默认的webpack配置项
> 1）yarn eject 把隐藏的配置项展示出来
> 问题：如果当前项目是基于git仓库管理的，并且由部分内容没有提交到历史区，此时执行此操作会报错，我们需要把工作区内容清空（提交到历史区）
>2）我们基于默认的配置项，新增加less的处理
> yarn add less less-loader
> 修改配置项，记得修改两个(webpack.config.dev.jd/webpack.config.prod.js)
>swiper 插件
`npm install react swipe-js-iso react-swipe`
>react-transition-group插件
# npm
 `npm install react-transition-group --save`
# yarn
`yarn add react-transition-group`  
>axios 
`yarn add axios`
基于promise async await 
jsonp是基于get请求而不支持post请求 
>安装中间件
`yarn add redux-logger redux-thunk redux-promise`
>安装md5插件对登录密码进行加密
 `yarn add blueimp-md5`


