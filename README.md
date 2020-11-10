# ysjy-h5
优尚佳艺

## 拉代码步骤


找到你上次那个zhonghai-h5,然后找到他的上一层文件夹，用vscode打开比如：work---zhonghai-h5打开work

然后点击菜单栏的查看，点击终端然后输入   git clone https://github.com/aiaxia/ysjy-h5.git
（这样work的文件里会自动生成一个新的文件夹，就是项目）

把项目用vscode打开,或者把新生成的文件直接拖到vscode也可以

然后点击菜单栏的查看，点击终端输入npm install(只第一次克隆代码的时候运行一次，以后都不用运行)，运行完成再执行下一步

然后输入npm run start(看界面效果的,浏览器)


## 更新代码

输入git pull拉一下新的代码


## 上传服务器代码步骤


没问题上传代码的话输入  npm run build生成的文件扔到服务器上


## 注意事项

1: npm run start运行之后要做其他的操作新开终端（因为npm run start是运行，你得一直运行着，所以不能关，你要做其他的操作需要新开终端）
2: 最终项目完成需要放到服务器菜npm run build（全部弄完了才放到服务器，才build）
