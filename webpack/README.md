#webpack学习笔记
Webpack是一款用户打包前端模块的工具。主要是用来打包在浏览器端使用的javascript的。同时也能转换、捆绑、打包其他的静态资源，包括css、image、font file、template等。

下面是webpack的常用命令
```
- webpack 执行一次开发时的编译
- webpack -p 执行一次生成环境的编译（压缩）
- webpack --watch 在开发时持续监控增量编译（很快）
- webpack -d 让他生成SourceMaps
- webpack --progress 显示编译进度
- webpack --colors 显示静态资源的颜色
- webpack --sort-modules-by, --sort-chunks-by, --sort-assets-by 将modules/chunks/assets进行列表排序
- webpack --display-chunks 展示编译后的分块
- webpack --display-reasons 显示更多引用模块原因
- webapck --display-error-details 显示更多报错信息
```

######了解一个工具最快的方式就是拿它和其他工具比较。（这里我们只比较使用的方便程度，至于工具自身执行的效率我个人并不怎么关心）
######这里我用来比较的是gulp。
1. 首先压缩静态文件
gulp用的是插件，通过编写代码来配置插件的使用，如果是多个html文件引用的资源需要分开压缩的话gulp配置文件中需要知道每一个js之间的引用，而webpack则是配置js对象来生成需要的压缩文件机制。<br>
个人感觉webpack的比较方便，通过简单的配置和命令就能达到压缩文件的目的，并且提供了压缩入口的机制，只要入口指定的js中require了其他的js文件，就可以把这些文件一起合并压缩。<br>
但是gulp也有它的好处，拓展性强，比如我开发的时候不仅仅需要压缩资源，还有替换资源链接，有的资源需要压缩，有的泽不需要，开发版本和线上压缩后的版本分别存在，webpack就有点困难，目前我也正在研究webpack有没有好的解决方案。<br>

2. 模块化
webpack正是为此而生，gulp暂时不提供此种功能可供开发（也许有吧，反正我没用过。）<br>
不过个人觉得这个功能比较鸡肋，首先模块化打包工具是为了模块化而生，而模块化又是为了解决js加载在恶劣的网络环境中会造成执行先后顺序错乱的问题。然而最后真正在线上环境中我们大多数会把所有的js包按照顺序给压缩成一个包，这时候又不存在这样的问题了。<br>

3. continue

以上只是我一个webpack初学者在学习过程中的理解，并且还没有完全发掘出webpack的潜能，只能这样一步步摸索。


