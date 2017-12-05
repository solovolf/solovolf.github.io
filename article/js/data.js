var menuList = [
    { name: '有意思的文章', type: 'article' },
    { name: '浏览器', type: 'browser' },
    { name: '协议', type: 'protocol' },
    { name: 'js', type: 'javascript' },
    { name: 'vuejs学习系列', type: 'vuejs' },
    { name: '插件', type: 'plugin' },
    { name: '工具', type: 'tool' },
    { name: '汇总', type: 'collect' },
    { name: '架构知识', type: 'framework' },
    { name: '原创', type: 'original' },
    { name: '书籍', type: 'book' },
    { name: '教程', type: 'course' },
    { name: '深度学习', type: 'deepLearning' }
]

var articleList = {
    article: [
        { name: 'requestAnimationFrame动画算法', url: 'http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/' },
        { name: '移动端适配方案', url: 'http://div.io/topic/1092' },
        { name: '解析vue2.0的diff算法', url: 'https://segmentfault.com/a/1190000008782928#articleHeader5' },
        { name: '饿了吗node面试题', url: 'https://github.com/ElemeFE/node-interview/blob/master/README.md' },
        { name: '什么是viewport，为啥需要viewport', url: 'http://www.myexception.cn/mobile/428756.html' },
        { name: '使用Flexible实现手淘H5页面的终端适配', url: 'https://github.com/amfe/article/issues/17' },
        { name: 'js中attribute和property的区别', url: 'http://www.jianshu.com/p/rRssiL' },
        { name: '移动端高清、多屏适配方案', url: 'http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041' },
        { name: 'H5 缓存机制浅析 - 移动端 Web 加载性能优化', url: 'https://segmentfault.com/a/1190000004132566' },
        { name: '让IE6/IE7/IE8浏览器支持CSS3属性', url: 'http://www.zhangxinxu.com/wordpress/2010/04/%E8%AE%A9ie6ie7ie8%E6%B5%8F%E8%A7%88%E5%99%A8%E6%94%AF%E6%8C%81css3%E5%B1%9E%E6%80%A7/' },
        { name: 'https 加密方式概念', url: 'http://whuhan2013.github.io/blog/2016/08/24/http-ptotecl-learn/' },
        { name: '细说webpack', url: 'http://taobaofed.org/blog/2016/09/09/webpack-flow/' },
        { name: 'passive event', url: 'https://www.qcloud.com/community/article/164816001481011865?fromSource=gwzcw.92748.92748.92748' },
        { name: '12个你未必知道的css小知识', url: 'http://www.webhek.com/12-little-known-css-facts' },
        { name: 'node简易服务器', url: 'http://coderlt.coding.me/2016/03/16/http-server-nodejs/' },
        { name: 'gulp自定义插件', url: 'http://www.alloyteam.com/2016/01/9918/' },
        { name: '正则不包含匹配', url: 'https://stackoverflow.com/questions/406230/regular-expression-to-match-a-line-that-doesnt-contain-a-word/24743196#24743196' },
        { name: '正则表达式学习', url: 'http://www.cnblogs.com/hustskyking/p/how-regular-expressions-work.html' },
        { name: '正则表达式入门', url: 'https://deerchao.net/tutorials/regex/regex.htm#mission' },
        { name: 'js正则基础', url: 'http://www.cnblogs.com/rubylouvre/archive/2010/03/09/1681222.html' },
        { name: '千分位格式化算法性能', url: 'http://heeroluo.net/article/detail/115' },
    ],
    javascript: [
        { name: '44个 Javascript 变态题解析 (上)', url: 'http://xiaoyu2er.github.io/2016/06/06/44-js-puzzles-part1/' },
        { name: 'js 优化原则', url: 'http://hax.iteye.com/blog/126859' },
        { name: '详解js闭包', url: 'https://segmentfault.com/a/1190000000652891' },
        { name: '前端文本截断', url: 'http://efe.baidu.com/blog/text-truncating/' },
    ],
    protocol: [
        { name: 'shadowsocks简介', url: 'http://vc2tea.com/whats-shadowsocks/' },
        { name: '如何理解 TCP/IP, SPDY, WebSocket 三者之间的关系？', url: 'https://www.zhihu.com/question/20097129' },
        { name: 'http协议详解', url: 'http://www.cnblogs.com/li0803/archive/2008/11/03/1324746.html' },
    ],
    vuejs: [
        { name: 'vuex2.0源码分析', url: 'http://gold.xitu.io/post/58352aaf880741006cfd65af' },
        { name: 'vue源码分析', url: 'https://github.com/youngwind/blog' }
    ],
    browser: [
        { name: '浏览器是怎样工作的', url: 'http://ued.ctrip.com/blog/how-browsers-work-rendering-engine-html-parsing-series-ii.html' },
        { name: '浏览器资源加载优化', url: 'http://www.infoq.com/cn/articles/browser-resource-loading-optimization' },
    ],
    plugin: [
        { name: "chrome插件之-图片对比", url: "https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi" },
        { name: "chrome插件之-网站分析", url: "https://chrome.google.com/webstore/detail/site-analyzer/ephokeeknlfdjadenpnpgkcndfjmomok" },
        { name: "chrome插件之-二维码", url: "https://chrome.google.com/webstore/detail/%E8%8D%89%E6%96%99%E4%BA%8C%E7%BB%B4%E7%A0%81/moombeodfomdpjnpocobemoiaemednkg" },
        { name: "ps插件之-cutterman切图神器", url: "http://www.cutterman.cn/zh/cutterman" }
    ],
    tool: [
        { name: "puzzler-活动页静态页面生成器", url: "https://github.com/superRaytin/puzzler/releases" },
        { name: "搬瓦工搭建教程", url: "http://banwagong.cn/gonglue.html" },
        { name: "搬瓦工", url: "https://bwh1.net/clientarea.php" },
        { name: "css 渐变 box-shadow 代码生成器", url: "http://www.cssmatic.com/" },
        { name: "css 渐变生成器 比上面一个流畅一点", url: "http://www.colorzilla.com/gradient-editor/" },
        { name: "css3 生成器", url: "http://www.cssreflex.com/css-generators/" },
        { name: "图片加载中图片 收费  不过这个看到现成的效果然后自己写", url: "http://preloaders.net/en/circular" },
        { name: "免费的css loader 效果", url: "https://github.com/ConnorAtherton/loaders.css" },
        { name: "js 代码混淆加密 过程不可逆", url: "http://utf-8.jp/public/jjencode.html" },
        { name: "cmd markdown 在线编辑markdown", url: "https://www.zybuluo.com/cmd/" },
        { name: "图片服务器", url: "http://www.tietuku.com/" },
        { name: "gif格式转换 配合macqq截屏 简直神器  缺点就是较慢", url: "http://www.alltoall.net/mp4_gif/" },
        { name: "图标工厂", url: "http://icon.wuruihong.com/" },
        { name: "web资源转换", url: "http://www.css-js.com/tools/base64.html" }
    ],
    collect: [
        { name: "前端资源教程  很全  前端很多资料可以在这里找", url: "https://cnodejs.org/topic/56ef3edd532839c33a99d00e" },
        { name: "前端 精华 汇总", url: "https://cnodejs.org/topic/56ef3edd532839c33a99d00e" },
        { name: "大前端的瑞士军刀", url: "http://www.fefork.com/fetool/" },
    ],
    framework: [
        { name: "前端架构", url: "http://saito.im/note/The-Architecture-of-F2E/" },
        { name: "如何成为前端架构师", url: "https://www.zhihu.com/question/24092572" },
    ],
    original: [
        { name: "vue-cli 配置多页面应用", url: "http://blog.csdn.net/solovolf/article/details/53066402" },
        { name: "css3-flex 布局理解", url: "http://blog.csdn.net/solovolf/article/details/52982338" },
    ],
    book: [
        { name: "CSS秘密花园", url: "http://www.kancloud.cn/digest/css-secrets/68469" }
    ],
    course: [
        { name: "markdown语法说明", url: "http://zh.mweb.im/markdown-syntax-guide-suggest-version-zh.html" },
        { name: "axios教程", url: "http://coderlt.coding.me/2017/03/21/axios-api-md/" },
        { name: "react-native navigator", url: "https://reactnavigation.org/docs/navigators/custom" },
        { name: "xcode 图标设置", url: "http://www.jianshu.com/p/2e6756c4c7be" },
        { name: "iOS开发证书与配置文件的使用", url: "http://www.jianshu.com/p/9d9e3699515e" },
        { name: "rn SectionList使用", url: "http://blog.csdn.net/mengks1987/article/details/70236823" },
        { name: "koa 中文教程", url: "https://github.com/guo-yu/koa-guide" },
        { name: "koa xtemplate", url: "http://book.apebook.org/minghe/koa-action/xtemplate/use.html" },
        { name: "git 教程", url: "http://www.imooc.com/article/20411" },
        { name: "linux部署node", url: "http://www.jianshu.com/p/7c2a81cd2c11" },
        { name: "go语言学习", url: "https://github.com/astaxie/build-web-application-with-golang/blob/master/zh/preface.md" },
    ],
    deepLearning:[
        {name:"入门1",url:"https://zhuanlan.zhihu.com/p/27172826"},
        {name:"入门2",url:"https://zhuanlan.zhihu.com/p/27319114"},
        {name:"游乐园",url:"http://playground.tensorflow.org/"},
    ]
}