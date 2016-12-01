var menuList = [
    {name: '有意思的文章', type: 'article'},
    {name: '浏览器', type: 'browser'},
    {name: '协议', type: 'protocol'},
    {name: 'js', type: 'javascript'},
    {name: 'vuejs学习系列', type: 'vuejs'},
    {name: '插件', type: 'plugin'},
    {name: '工具', type: 'tool'},
    {name: '汇总', type: 'collect'},
    {name: '架构知识', type: 'framework'},
]

var articleList={
    article:[
        {name:'requestAnimationFrame动画算法',url:'http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/'},
        {name:'什么是viewport，为啥需要viewport',url:'http://www.myexception.cn/mobile/428756.html'},
        {name:'使用Flexible实现手淘H5页面的终端适配',url:'https://github.com/amfe/article/issues/17'},
        {name:'js中attribute和property的区别',url:'http://www.jianshu.com/p/rRssiL'},
        {name:'移动端高清、多屏适配方案',url:'http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041'},
        {name:'H5 缓存机制浅析 - 移动端 Web 加载性能优化',url:'https://segmentfault.com/a/1190000004132566'},
        {name:'让IE6/IE7/IE8浏览器支持CSS3属性',url:'http://www.zhangxinxu.com/wordpress/2010/04/%E8%AE%A9ie6ie7ie8%E6%B5%8F%E8%A7%88%E5%99%A8%E6%94%AF%E6%8C%81css3%E5%B1%9E%E6%80%A7/'},
        {name:"麻省理工学院公开课：计算机科学及编程导论",url:"http://open.163.com/special/opencourse/bianchengdaolun.html"},
        {name:"AlloyTeam",url:"https://github.com/AlloyTeam/Mars"}
    ],
    javascript:[
        {name:'44个 Javascript 变态题解析 (上)',url:'http://xiaoyu2er.github.io/2016/06/06/44-js-puzzles-part1/'},
        {name:'js 优化原则',url:'http://hax.iteye.com/blog/126859'},
        {name:'详解js闭包',url:'https://segmentfault.com/a/1190000000652891'},
        {name:'前端文本截断',url:'http://efe.baidu.com/blog/text-truncating/'},
    ],
    protocol:[
        {name:'shadowsocks简介',url:'http://vc2tea.com/whats-shadowsocks/'},
        {name:'如何理解 TCP/IP, SPDY, WebSocket 三者之间的关系？',url:'https://www.zhihu.com/question/20097129'},
        {name:'http协议详解',url:'http://www.cnblogs.com/li0803/archive/2008/11/03/1324746.html'},
    ],
    vuejs:[
        {name:'vuex2.0源码分析',url:'http://gold.xitu.io/post/58352aaf880741006cfd65af'},
        {name:'vue源码分析',url:'https://github.com/youngwind/blog'}
    ],
    browser:[
        {name:'浏览器是怎样工作的',url:'http://ued.ctrip.com/blog/how-browsers-work-rendering-engine-html-parsing-series-ii.html'},
        {name:'浏览器资源加载优化',url:'http://www.infoq.com/cn/articles/browser-resource-loading-optimization'},
    ],
    plugin:[
        {name:"chrome插件之-图片对比",url:"https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi"},
        {name:"chrome插件之-网站分析",url:"https://chrome.google.com/webstore/detail/site-analyzer/ephokeeknlfdjadenpnpgkcndfjmomok"},
        {name:"chrome插件之-二维码",url:"https://chrome.google.com/webstore/detail/%E8%8D%89%E6%96%99%E4%BA%8C%E7%BB%B4%E7%A0%81/moombeodfomdpjnpocobemoiaemednkg"},
        {name:"ps插件之-cutterman切图神器",url:"http://www.cutterman.cn/zh/cutterman"}
    ],
    tool:[
        {name:"puzzler-活动页静态页面生成器",url:"https://github.com/superRaytin/puzzler/releases"},
        {name:"搬瓦工搭建教程",url:"http://banwagong.cn/gonglue.html"},
        {name:"css 渐变 box-shadow 代码生成器",url:"http://www.cssmatic.com/"},
        {name:"css 渐变生成器 比上面一个流畅一点",url:"http://www.colorzilla.com/gradient-editor/"},
        {name:"css3 生成器",url:"http://www.cssreflex.com/css-generators/"},
        {name:"图片加载中图片 收费  不过这个看到现成的效果然后自己写",url:"http://preloaders.net/en/circular"},
        {name:"免费的css loader 效果",url:"https://github.com/ConnorAtherton/loaders.css"},
    ],
    collect:[
        {name:"前端资源教程  很全  前端很多资料可以在这里找",url:"https://cnodejs.org/topic/56ef3edd532839c33a99d00e"},
        {name:"前端 精华 汇总",url:"https://cnodejs.org/topic/56ef3edd532839c33a99d00e"},
        {name:"大前端的瑞士军刀",url:"http://www.fefork.com/fetool/"},
    ],
    framework:[
        {name:"前端架构",url:"http://saito.im/note/The-Architecture-of-F2E/"},
        {name:"如何成为前端架构师",url:"https://www.zhihu.com/question/24092572"},
    ]
}