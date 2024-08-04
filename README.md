# Electron

## 通过外部URL,快速打包成window应用程序
把项目部署，再创建一个简单的electron项目,通过loadURL方法加载外部url的方式创建项目，最后打包成应用程序。这种方式的劣势应该是依赖网络，没有网络无法访问。

## 使用
将index.js文件中`win.loadURL('https://www.electronjs.org/zh/')` URL更换要打包的网址。

## 后面继续学习更新
+ 运行或者打包的图标、标题、窗口样式
+ 各个平台的配置
+ 安装程序的自定义(可以配置吗？？)
+ 官网打包教程是Electron Forge 还没有研究，先使用electron-builder