## Boostrap-v4 + jQuery + i18n + webpack4多页面模版, 适用官网开发


### 构建步骤
``` bash
# 安装依赖
npm install

# 开发的时候在本地启动, 并开始热加载
npm run dev

# production的发布时打包
npm run build
```

### html-loader复用头文件和尾部文件
### [origin](https://github.com/WangZhenHao/webpack-multiple-page)


#### 自动创建文件功能
```
添加新增文件的配置文件  build/bin/new.js

在build/config/pages.js里面添加对应的配置即可
```
### 开发

1.  [sass](https://www.sass.hk/)

2. [i18next](https://github.com/i18next/i18next)

3. [jquery-i18next](https://github.com/i18next/jquery-i18next)

4. [animate.css](https://animate.style/)

5. [jquery-aniview](https://github.com/jjcosgrove/jquery-aniview)

6. [iconfont](https://www.iconfont.cn)

   

### 目录结构

```
│─build                                 多页面配置文件
│     ├─config                          可以改变的配置 
│     │ ├─pages.js                      需要打包的页面名称（在这里设定要新建的页面）
│     │ └─ index.js                      web server配置
│     │ 
│     ├─webpack.base.config.js 
│     ├─webpack.dev.config.js
│     └─webpack.prod.config.js
│      
│     
│─src                                      // src 文件夹
│    ├─pages                               // 页面文件夹
│    │  ├─about
│    │  │      about.html
│    │  │      about.js
│    │  │      about.scss
│    │  │
│    │  │ 
│    │  │
│    │  └─home
│    │          home.html
│    │          home.js
│    │          home.scss
│    │
│    └─assets                          // 公共文件夹
│          ├─ layout                   // 复用html     
│          │     head.html             // 公共头文件 
│          │ 
│
│
│
│─static                               //静态文件文件夹
│    ├─js
│    ├─css
│    └─img                             (img)最好使用这个名称为文件夹
│
│  .babelrc                           // babel的配置文件
│  .gitignore
│  package.json
│  README.md

```

